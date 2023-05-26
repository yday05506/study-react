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

    return <div>
        <button onClick={() => {setToggle(s => !s)}}>
            {toggle ? "on" : "off"}
        </button>
    </div>
}

// 3번 문제
const RandomColorPicker = function(props) {
    const [pickColor, setPickColor] = useState('000000')

    function randomHex() {
        return (Math.floor(Math.random() * (15 - 1 + 1) + 1)).toString(16);
    }

    return (
        <div>
            <div style={{width: 200, height:200, backgroundColor: pickColor}}>
            <button onClick={() => {
                let randomColor = "#"
                for (let i = 0; i < 6; i++) {
                    randomColor += randomHex(1)
                }
                setPickColor(randomColor)
            }}>pick</button>
            </div>
        </div>
    )
}

// 4번 문제
const PasswordInput = function(props) {
    const [text, setText] = useState("")
    const [show, setShow] = useState(true)

    let result = ""
    if(!show) {
        for(let i = 0; i < text.length; i++) {
            result += "*"
        }
    }
    else {
        result = text
    }

    return (
        <div>
            <input type="text" value={result} onChange={e => setText(e.target.value)}/>
            <button onClick={() => {
                setShow(true)
            }}>show</button>
            <button onClick={() => {
                setShow(false)
            }}>hide</button>
        </div>
    )
}

function RatingStar(props) {
    const [rating, setRating] = useState(1)
    const stars = []
    
    for(let i = 0; i < 5; i++) {
        stars.push(
            <span onClick={() => setRating(i)}>{i > rating ? "☆" : "★"}</span>
        )
    }

    return <div>
        {stars}
    </div>
}




// ReactDOM.render(<Greeting prefix = "Hello" target="Yu Byung Suk"/>, document.getElementById("root"));
ReactDOM.render(<RatingStar />, document.getElementById("root"));