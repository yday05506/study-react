// 3208 양다연

import React, { useState } from "react"
import ReactDOM from "react-dom"

// 1번 문제
const Greeting = function(props) {
    return (
        <div>
            <h1>{props.prefix} {props.target}</h1>
        </div>
    )
}

// 2번 문제
const ToggleButton = function(props) {
    const [toggle, setToggle] = useState(true)
    const [label, setLabel] = useState("on")

    return <div>
        {toggle ? props.children : null}
        <button onClick={() => {
            setToggle(s => !s)
            if(setToggle === true)
                label = "on"
            else
                label = "off"
        }}>{label}</button>
    </div>
}

// 3번 문제
const RandomColorPicker = function(props) {
    const [pickColor, setPickColor] = useState('#')

    function randomHex() {
        return (Math.floor(Math.random() * (15 - 1 + 1) + 1)).toString(16);
    }

    const style = {
        backgroundColor : pickColor,
        width: 100,
        height: 100
    }

    return (
        <>
        <div style={style} />
        <button onClick={() => {
            for(let i = 1; i <= 6; i++) {
                pickColor += randomHex();
            }
        }}>pick</button>
        </>
    )
}

// 4번 문제
const PasswordInput = function(props) {
    const [password, setPassword] = useState(false);

    return (
        <input type={password ? "text" : "password"} />
    )
}




// ReactDOM.render(<Greeting prefix = "Hello" target="Yu Byung Suk"/>, document.getElementById("root"));
ReactDOM.render(<RandomColorPicker />, document.getElementById("root"));