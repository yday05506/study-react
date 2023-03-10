import React from "react"
import ReactDOM from 'react-dom'

function Greeting(props) {
    const name = props.name;
    return <h1>Hello, {name}</h1>
}

ReactDOM.render(<Greeting name="병석" />, document.getElementById("root"));