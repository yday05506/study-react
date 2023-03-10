import React from "react"
import ReactDOM from 'react-dom'

function SlotMachine({s1, s2, s3}) {
    if((s1 === s2) && (s2 === s3)) return <p>{s1} {s2} {s3} <br />Congrats!</p>
    if((s1 === '7') && (s2 === '7') && (s3 === '7')) return <p style={{color : 'red'}}>Congrats!</p>
}

<>
<SlotMachine s1="X" s2="Y" s3="Z" />
<SlotMachine s1="X" s2="X" s3="X" />
<SlotMachine s1="7" s2="7" s3="7" />
// 과일 이모지 : 🍇🍈🍉🍊🍌🍍🍎🍏🍑🍒🍓🍅🍆🌽🍄🌰
<SlotMachine s1="🍓" s2="🍒" s3="🍍" />
<SlotMachine s1="🍒" s2="🍒" s3="🍒" />
</>

ReactDOM.render(<SlotMachine />, document.getElementById("root"));