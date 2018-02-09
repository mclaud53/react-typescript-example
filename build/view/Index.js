"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Layout extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (React.createElement("html", null,
            React.createElement("head", null,
                React.createElement("meta", { charSet: "utf-8" }),
                React.createElement("title", null, "React Typescript Example"),
                React.createElement("link", { rel: "stylesheet", href: "/public/js/common.css", media: "all" }),
                React.createElement("link", { rel: "stylesheet", href: "/public/js/index.css", media: "all" }),
                React.createElement("script", { type: "text/javascript", src: "/public/js/common.js" }),
                React.createElement("script", { type: "text/javascript", src: "/public/js/index.js" })),
            React.createElement("body", null,
                React.createElement("header", null),
                React.createElement("main", null,
                    React.createElement("div", { id: "app" })),
                React.createElement("footer", null))));
    }
}
exports.default = Layout;
