import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"

function Kanye(props) {
    const kanye = props.kanye;
    return <div>
        Kanye: {kanye}<br/>
    </div>
}

function KanyeApp(){
    const [quote, setQuote] = useState(false)
    const [text, setText] = useState('')

    const handleChangeButton = () => {
        setQuote(q => !q)
    }

    useEffect(() => {
        fetch(`https://api.kanye.rest`)
                .then(res => res.json())
                .then(json => setText(json.quote))
        }, [quote])

    return(
        <div>
            <p>{text}</p>
            <button onClick={handleChangeButton}>Get</button>
        </div>
    )
}
ReactDOM.render(<KanyeApp />, document.getElementById("root"))