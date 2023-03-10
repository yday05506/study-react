import React from "react"
import ReactDOM from 'react-dom'

// 함수 인자값을 전달받으면서 비구조화 할당 진행
// const PersonProfile = function({ name, age, gender, profile, highlight }) {
//     return (
//         <div className='person' style={highlight ? {color: 'red'} : null}>
//             <h1>Profile</h1>
//             <img src={profile} />
//             <p>name : {name}</p>
//             <p>age : {age}</p>
//             <p>gender : {gender}</p>
//         </div>
//     )
// }

function PersonProfile(props) {
    const {name, age, gender, profile, highlight} = props.person;
    return (
        <div className='person' style={highlight ? {color: 'red'} : null}>
            <h1>Profile</h1>
            <img src={profile} />
            <p>name : {name}</p>
            <p>age : {age}</p>
            <p>gender : {gender}</p>
        </div>
    )
}

const myPerson = {
    name: 'Jane',
    age: 28,
    gender: 'female',
    profile: 'https://randomuser.me/api/portraits/women/75.jpg'
}

ReactDOM.render(<PersonProfile person={myPerson} />, document.getElementById("root"));

// ReactDOM.render(<PersonProfile 
//     profile="https://i.namu.wiki/i/3s1rOXsCcAgFo6m32QSnwxTbtnG1wTxFgQdDVhl9Nqg066MgSKCu0foxVgklR-g8zBYAtp6_BXu3tQPi6X7c2d7EtHdxuZSL3fR1pP4qEGPqb5_dZibEFpMQoKBSsUXO_wJm1-Sjz3L-kSChSDoS1Q.webp" 
//     name="김민주" 
//     age={31} 
//     gender="남성" />, document.getElementById("root"));