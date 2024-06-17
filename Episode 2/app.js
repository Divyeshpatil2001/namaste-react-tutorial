const parent = React.createElement(
    "div",{},
    React.createElement("div",{},
    [
        React.createElement("h1",{},"third child i"),
        React.createElement("h2",{},"third child i another")
    ]
))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
