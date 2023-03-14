import React from "react"
import ReactDOM from 'react-dom'

function SlotMachine({s1, s2, s3}) {
    if((s1 === '7') && (s2 === '7') && (s3 === '7')) return <p>{s1} {s2} {s3} <br /> <div style={{color:'red'}}>Congrats!</div></p>
    if((s1 === s2) && (s2 === s3)) return <p>{s1} {s2} {s3} <br />Congrats!</p>
    else return <p>{s1} {s2} {s3}</p>
}

ReactDOM.render(
<div>
<SlotMachine s1="X" s2="Y" s3="Z" />
<SlotMachine s1="X" s2="X" s3="X" />
<SlotMachine s1="7" s2="7" s3="7" />
<SlotMachine s1="🍓" s2="🍒" s3="🍍" />
<SlotMachine s1="🍒" s2="🍒" s3="🍒" />
</div>, document.getElementById("root"));