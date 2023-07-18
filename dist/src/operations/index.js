"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_TODO = exports.GET_USER_TODOS = void 0;
const __generated__1 = require("../__generated__");
exports.GET_USER_TODOS = (0, __generated__1.gql)(`
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
exports.UPDATE_TODO = (0, __generated__1.gql)(`
mutation UpdateTodo($id: ID!, $input: UpdateTodoInput!) {
 updateTodo(id: $id, input: $input) {
    completed
    title
    id
  }
}`);
//# sourceMappingURL=index.js.map