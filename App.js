import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1",{
    id:"heading"
},"Namaste World from React");

const parent = React.createElement("div",{id:"parent",key:0},
    [React.createElement("div",{id:"child1",key:6},
    [    React.createElement("h1",{key:1},"This is a h1 tag")
        ,React.createElement("h2",{key:2},"This is a h2 tag")]
    ),
    React.createElement("div",{id:"child2", key:5},
    [    React.createElement("h1",{key:3},"This is Namaste React")
        ,React.createElement("h2",{key:4},"By Akshay Saini")]
    ),    
]
);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);