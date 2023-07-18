"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = require("react-dom/client");
const App_1 = __importDefault(require("./App"));
document.body.innerHTML = '<div id="app"></div>';
const root = (0, client_1.createRoot)(document.getElementById('app'));
root.render((0, jsx_runtime_1.jsx)(App_1.default, {}, void 0));
//# sourceMappingURL=main.js.map