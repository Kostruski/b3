import { gql } from '../__generated__';

export const GET_USER_TODOS = gql(`
 query GetUserTodos($id: ID!) {
    userId @client @export(as: "id")
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

export const GET_USER_ID = gql(`
    query GetUserId {
        userId @client
    }
`);
