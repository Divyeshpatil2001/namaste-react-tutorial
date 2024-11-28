import React from "react";
import ReactDOM from "react-dom/client";

// react.createelement => object => htmlelement(render)

const heading = React.createElement(
    "h1",
    {id: 'heading'},
    'welcome to pure js react'
)
// using jsx
const jsxheading = <h1>welcome to jsx</h1>
console.log(heading)
console.log(jsxheading)

// babel is doing transplation => Converting the code in such a format that the browsers can understand.
// parecl gives this responsibilty to babel then now browser unserstand jsx
// jsx is html like strutcure 
// jsx (transpiled by Babel) => React.createElement => ReactElementjs object => html element(render)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
