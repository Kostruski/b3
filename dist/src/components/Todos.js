"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = require("@apollo/client");
const reactstrap_1 = require("reactstrap");
const operations_1 = require("../operations");
const Todos = () => {
    var _a, _b;
    const [getTodos, { loading, data, error }] = (0, client_1.useLazyQuery)(operations_1.GET_USER_TODOS);
    const [updateTodo] = (0, client_1.useMutation)(operations_1.UPDATE_TODO);
    const todos = ((_b = (_a = data === null || data === void 0 ? void 0 : data.user) === null || _a === void 0 ? void 0 : _a.todos) === null || _b === void 0 ? void 0 : _b.data) || [];
    const getUserTodos = (id) => {
        getTodos({ variables: { id } });
    };
    const toggleTodoCompleted = (id) => {
        var _a;
        const completed = !!((_a = todos.find((todo) => (todo === null || todo === void 0 ? void 0 : todo.id) === id)) === null || _a === void 0 ? void 0 : _a.completed);
        updateTodo({ variables: { id, input: { completed: !completed } } });
    };
    if (loading)
        return (0, jsx_runtime_1.jsx)("p", { children: "... loading" }, void 0);
    return ((0, jsx_runtime_1.jsxs)(reactstrap_1.Container, { children: [(0, jsx_runtime_1.jsxs)(reactstrap_1.Row, { children: [(0, jsx_runtime_1.jsx)(reactstrap_1.Col, { children: (0, jsx_runtime_1.jsx)(reactstrap_1.Button, Object.assign({ onClick: () => getUserTodos('1') }, { children: "Fetch user 1 todos" }), void 0) }, void 0), (0, jsx_runtime_1.jsx)(reactstrap_1.Col, { children: (0, jsx_runtime_1.jsx)(reactstrap_1.Button, Object.assign({ onClick: () => getUserTodos('2') }, { children: "Fetch user 2 todos" }), void 0) }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)(reactstrap_1.Row, { children: (0, jsx_runtime_1.jsx)(reactstrap_1.Col, { children: error || !(todos === null || todos === void 0 ? void 0 : todos.length) ? ((0, jsx_runtime_1.jsx)("div", { children: (error === null || error === void 0 ? void 0 : error.message) || 'no todos' }, void 0)) : (todos.map((todo) => {
                        var _a;
                        return ((0, jsx_runtime_1.jsx)(reactstrap_1.Card, { children: (0, jsx_runtime_1.jsxs)(reactstrap_1.CardBody, { children: [(0, jsx_runtime_1.jsx)(reactstrap_1.CardTitle, Object.assign({ id: (todo === null || todo === void 0 ? void 0 : todo.id) || '' }, { children: (todo === null || todo === void 0 ? void 0 : todo.title) || '' }), void 0), (0, jsx_runtime_1.jsxs)(reactstrap_1.CardSubtitle, { children: ["Completed: ", (_a = todo === null || todo === void 0 ? void 0 : todo.completed) === null || _a === void 0 ? void 0 : _a.toString()] }, void 0), (0, jsx_runtime_1.jsx)(reactstrap_1.CardFooter, { children: (0, jsx_runtime_1.jsx)(reactstrap_1.Button, Object.assign({ onClick: () => toggleTodoCompleted((todo === null || todo === void 0 ? void 0 : todo.id) || '') }, { children: "Completed" }), void 0) }, void 0)] }, void 0) }, todo === null || todo === void 0 ? void 0 : todo.id));
                    })) }, void 0) }, void 0)] }, void 0));
};
exports.default = Todos;
//# sourceMappingURL=Todos.js.map