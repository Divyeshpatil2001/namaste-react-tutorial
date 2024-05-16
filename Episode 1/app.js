// const heading = React.createElement("h1",{id:"heading1"},"hello world from react");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// console.log(heading);

// nested html structure 
// const parent = React.createElement("div",{},React.createElement("div",{},React.createElement("h1",{},"third child i")))

// create siblings (in children div = 2 heading) with array 
const parent = React.createElement(
    "div",{},
    React.createElement("div",{},
    [React.createElement("h1",{},"third child i"),React.createElement("h2",{},"third child i another")]))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);


// these deep tree should complex if i more tag in this deep
// so we use jsx to easily create element