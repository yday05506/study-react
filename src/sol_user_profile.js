import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const UserProfile = function(props) {
    const [userName, setUserName] = useState("김민주");
    const [userAge, setUserAge] = useState(31);
    const [emailAddress, setEmailAddress] = useState("마포구");

    return (
        <div>
            <p>{userName}</p>
            <p>{userAge}</p>
            <p>{emailAddress}</p>
        </div>
    )
}

ReactDOM.render(<UserProfile />, document.getElementById("root"))