import React, { FunctionComponent } from 'react';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardSubtitle,
  CardTitle,
  Col,
  Container,
  Row,
} from 'reactstrap';
// import { useFlag } from '@unleash/proxy-client-react';
import classnames from 'classnames';
import { GET_USER_ID, GET_USER_TODOS, UPDATE_TODO } from '../operations';

import styles from './Todos.module.scss';
import { Todo } from '../__generated__/graphql';
import { updateUser } from '../apollo-cilient/cache';

const Todos: FunctionComponent = () => {
  const [getTodos, { loading, data, error }] = useLazyQuery(GET_USER_TODOS);
  const { data: userData } = useQuery(GET_USER_ID);
  const [updateTodo] = useMutation(UPDATE_TODO);
  const todos = data?.user?.todos?.data || ([] as Todo[]);
  // const enabled = useFlag('red');
  const enabled = true;

  const toggleTodoCompleted = (id: string) => {
    const completed = !!todos.find((todo) => todo?.id === id)?.completed;
    updateTodo({ variables: { id, input: { completed: !completed } } });
  };

  if (loading) return <p>... loading</p>;

  return (
    <Container>
      <Row>
        <Col>
          <Button onClick={() => updateUser('1')}>Set user 1</Button>
        </Col>
        <Col>
          <Button onClick={() => updateUser('2')}>Set user 2</Button>
        </Col>
        <Col>
          <Button
            onClick={() => {
              void getTodos();
            }}
          >
            {`Get todos for user ${userData.userId}`}
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {error || !todos?.length ? (
            <div>{error?.message || 'no todos'}</div>
          ) : (
            todos.map((todo) => (
              <Card key={todo?.id}>
                <CardBody className={classnames({ [styles.card]: enabled })}>
                  <CardTitle id={todo?.id || ''}>{todo?.title || ''}</CardTitle>
                  <CardSubtitle>
                    Completed: {todo?.completed?.toString()}
                  </CardSubtitle>
                  <CardFooter>
                    <Button onClick={() => toggleTodoCompleted(todo?.id || '')}>
                      {todo?.completed ? 'Set not completed' : 'Set completed'}
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            ))
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Todos;
