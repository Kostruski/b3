import { gql } from '../__generated__';

export const GET_USER_TODOS = gql(`
 query GetUserTodos($id: ID!) {
    user(id: $id) {
      todos {
        data {
         id
         title
         completed
      }
    }
  }
}
`);

export const UPDATE_TODO = gql(`
mutation UpdateTodo($id: ID!, $input: UpdateTodoInput!) {
 updateTodo(id: $id, input: $input) {
    completed
    title
    id
  }
}`);
