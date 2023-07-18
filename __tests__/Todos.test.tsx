import { render } from '@testing-library/react';
import React from 'react';
import { MockedProvider } from '@apollo/client/testing';
import userEvent from '@testing-library/user-event';
import { TypedDocumentNode } from '@apollo/client';
import { GET_USER_TODOS } from '../src/operations';
import Todos from '../src/components/Todos';
import {
  GetUserTodosQuery,
  GetUserTodosQueryVariables,
  Todo,
} from '../src/__generated__/graphql';

type Mock = {
  result: {
    data: {
      user: {
        todos: {
          data: Todo[];
        };
      };
    };
  };
  request: {
    variables: { id: string };
    query: TypedDocumentNode<GetUserTodosQuery, GetUserTodosQueryVariables>;
  };
};

const mocks: Mock[] = [
  {
    request: {
      query: GET_USER_TODOS,
      variables: { id: '1' },
    },
    result: {
      data: {
        user: {
          todos: {
            data: [
              {
                id: '1',
                title: 'New Todo',
                completed: false,
              },
            ],
          },
        },
      },
    },
  },
];

it('should show no todos on initial render', () => {
  const { getByText } = render(
    <MockedProvider mocks={[]} addTypename={false}>
      <Todos />
    </MockedProvider>,
  );
  expect(getByText('no todos')).toBeInTheDocument();
});

it('should show todos after click', async () => {
  const { findByText, getByText } = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Todos />
    </MockedProvider>,
  );

  await userEvent.click(getByText('Fetch user 1 todos'));

  expect(await findByText('New Todo')).toBeVisible();
});
