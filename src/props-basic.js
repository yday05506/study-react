import React from "react"
import ReactDOM from 'react-dom'

// props를 통해서 전달된 값에 접근 가능
const ComponentWithProps = function(props) {
    console.log(props)
    return <p>{JSON.stringify(props)}</p>
}

ReactDOM.render(<ComponentWithProps
    value1="Hello"
    value2={1}
    value3={{ a: 1, b: "React" }}
    value4={() => { }}
    name="병석"
    />, document.getElementById("root"));