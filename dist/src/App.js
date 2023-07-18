"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const client_1 = require("@apollo/client");
const Todos_1 = __importDefault(require("./components/Todos"));
const URL = 'https://graphqlzero.almansi.me/api';
const client = new client_1.ApolloClient({
    uri: URL,
    cache: new client_1.InMemoryCache(),
});
const App = () => ((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(client_1.ApolloProvider, Object.assign({ client: client }, { children: (0, jsx_runtime_1.jsx)(Todos_1.default, {}, void 0) }), void 0) }, void 0));
exports.default = App;
//# sourceMappingURL=App.js.map