const parent = React.createElement(
    "div",
    { id: "parent" },[
    React.createElement(
        "div",
        { id: "child" },[
        React.createElement("h1", {}, "Hello world from h1 react"),
        React.createElement("h2", {}, "Hello world from h2 react"),
    ]
    ),
    React.createElement("div",
        { id: "child" },[
        React.createElement("h1", {}, "Hello world from h1 react"),
        React.createElement("h2", {}, "Hello world from h2 react"),
    ]
)
    ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

