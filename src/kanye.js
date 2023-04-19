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
        if(quote === false)
            setQuote(true)
        else setQuote(false)
    }
    const handleButton = () => {
        handleChangeButton();
    }

    useEffect(() => {
        fetch(`https://api.kanye.rest/`)
                .then(res => res.json())
                .then(json => setQuote(json.quote))
        })

    return(
        <div>
            <KanyeApp handleChangeButton = {handleButton}/>
            <button onClick={handleButton}>Get</button> {
                setQuote(false)
            }
        </div>
    )
}
ReactDOM.render(<KanyeApp />, document.getElementById("root"))