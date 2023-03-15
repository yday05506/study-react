import React from "react"
import ReactDOM from 'react-dom'

function SlotMachine(props) {
    const {s1, s2, s3} = props;
    const patterns = <p>{s1} {s2} {s3} </p>
    const allSamePattern = s1 === s2 && s2 === s3;
    const shouldHighlight = allSamePattern && s1 === '7';

    return <div>
        {patterns}
        {allSamePattern && <p style={shouldHighlight ? {color:"red"} : null}>축하합니다.</p>}
    </div>

    // 안 좋은 조건.
    // if(s1 === s2 && s2 === s3) {
    //     if(s1 === '7') {
    //         return <p style={{color:"red"}}>{s1} {s2} {s3} <br />축하합니다.</p>
    //     } else {
    //         return <p> {s1} {s2} {s3} <br />축하합니다.</p>
    //     }
    // } else {
    //     return <p>{s1} {s2} {s3}</p>
    // }
}

ReactDOM.render(
    <div>
    <SlotMachine s1="X" s2="Y" s3="Z" />
    <SlotMachine s1="X" s2="X" s3="X" />
    <SlotMachine s1="7" s2="7" s3="7" />
    <SlotMachine s1="🍓" s2="🍒" s3="🍍" />
    <SlotMachine s1="🍒" s2="🍒" s3="🍒" />
    </div>, document.getElementById("root"));