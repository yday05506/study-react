import React, { useState, useContext, createContext } from "react"
import ReactDOM from "react-dom"

const LoginUserContext = createContext(null)

function UserButton(props) {
    const { loginUser, setLoginUser } = useContext(LoginUserContext)
    const [ fetching, setFetching ] = useState(false)

    const handleLogin = () => {
        setFetching(true)
        fetch('https://randomuser.me/api/', 
            { headers: { 'Content-Type': 'application/json' } })
            .then(res => res.json())
            .then(data => {
                const login = data.results[0].login
                
                setLoginUser({
                    picture: data.results[0].picture.large,
                    username: login.username,
                    email: data.results[0].email,
                    cell: data.results[0].cell,
                });
                setFetching(false)
            })
    }
    const handleLogout = () => {
        setLoginUser(null)
    }

    return (
        loginUser === null ? 
            fetching ? <button disabled>...</button> : <button onClick={handleLogin}>Login</button> : 
            <div>
                <button onClick={handleLogout}>Logout</button>
                <img src={loginUser.picture} style={{ borderRadius: '50%', width: 40, height: 40 }}/>
                <span>username: {loginUser.username}</span>
                <span>email: {loginUser.email}</span>
                <span>cell: {loginUser.cell}</span>
            </div>
    )
}

function App() {
    const [ loginUser, setLoginUser ] = useState(null)

    return (
        <LoginUserContext.Provider value={ { loginUser, setLoginUser } }>
            <UserButton />
        </LoginUserContext.Provider>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));