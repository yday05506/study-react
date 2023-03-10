import ReactDOM from 'react-dom'
import React from 'react'

// 함수 선언식을 통해서 컴포넌트 정의 가능
function Cat() {
    return <div>🐱</div>
}

// 함수 표현식을 통해서 컴포넌트 정의 가능
const Dog = function() {
    return <div>🐶</div>
}

// 화살표 함수로 컴포넌트 정의 가능
const Pig = () => <div>🐷</div>

function AnimalContainer() {
    return (
        /* 일반적인 태그 사용 가능 */
        <> {/* 아님 이거 */}
        {/* <React.Fragment>    div를 없애고 싶으면 이거 쓰셈 */}
        {/* <div style={{fontSize: "100px"}}>   무조건 위에 뭐로 묶어줘야 함 */}
            {/* 이미 정의한 컴포넌트들도 JSX 내부에서 사용 가능 */}
            <Cat />
            <Dog />
            <Pig />
        {/* </div> */}
        {/* </React.Fragment> */}
        </>
    )
}

ReactDOM.render(<AnimalContainer />, document.getElementById("root"));