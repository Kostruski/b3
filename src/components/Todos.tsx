import React, { FunctionComponent } from 'react';
import { useLazyQuery, useMutation } from '@apollo/client';
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
import { GET_USER_TODOS, UPDATE_TODO } from '../operations';
import { Todo } from '../__generated__/graphql';

const Todos: FunctionComponent = () => {
  const [getTodos, { loading, data, error }] = useLazyQuery(GET_USER_TODOS);
  const [updateTodo] = useMutation(UPDATE_TODO);
  const todos = data?.user?.todos?.data || ([] as Todo[]);

  const getUserTodos = (id: string) => {
    getTodos({ variables: { id } });
  };

  const toggleTodoCompleted = (id: string) => {
    const completed = !!todos.find((todo) => todo?.id === id)?.completed;
    updateTodo({ variables: { id, input: { completed: !completed } } });
  };

  if (loading) return <p>... loading</p>;

  return (
    <Container>
      <Row>
        <Col>
          <Button onClick={() => getUserTodos('1')}>Fetch user 1 todos</Button>
        </Col>
        <Col>
          <Button onClick={() => getUserTodos('2')}>Fetch user 2 todos</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {error || !todos?.length ? (
            <div>{error?.message || 'no todos'}</div>
          ) : (
            todos.map((todo) => (
              <Card key={todo?.id}>
                <CardBody>
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
