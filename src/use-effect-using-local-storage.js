import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

const CounterWithLocalStorage = (props) => {
    // localStorage 접근 코드가 mount 되는 시점에 단 한번만 실행되도록, useState로 전달할 함수 안에 초기화 코드 작성
    const [ count, setCount ] = useState(() => {
        // nullish coalescing operator(??) 사용
        // ?? : 왼쪽의 값이 null이면 오른쪽 값을 씀
        // return localStorage.getItem("count") ?? 0
        return localStorage.getItem("count") === null ? 0 : parseInt(localStorage.getItem("count"))
    })

    useEffect(() => {
        // count 값이 변경될 때마다 localStorage에 저장된 값도 변경
        localStorage.setItem("count", parseInt(count))
    }, [count])

    return (
        <div>
            <p>count : {count}</p>
            <button onClick={() => {
                setCount(c => c + 1)
            }}>+</button>
            <button onClick={() => {
                setCount(c => c - 1)
            }}>-</button>
        </div>
    )
}

ReactDOM.render(<CounterWithLocalStorage />, document.getElementById("root"));