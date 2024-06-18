import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div",{},
    React.createElement("div",{},
    [
        React.createElement("h1",{},"third dbbjj i"),
        React.createElement("h2",{},"third child i another")
    ]
))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
