import { useState } from "react";
import React from "react";
function UseInput() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    function HandleUsername(event) {
        setUsername(event.target.value)
    }
    function HandlePassword(event) {
        setPassword(event.target.value)
    }
    
    return {
        username, password, HandleUsername, HandlePassword
    }

}
export function LoginHook() {
    const {username, password, HandleUsername, HandlePassword} = UseInput()
    function HandleSubmit(event) {
        event.preventDefault()
        console.log(`username : ${username} password : ${password}`)
    }
    return (
        <div>
            <form onSubmit={HandleSubmit}>
                <input
                    name="username"
                    placeholder="username"
                    onChange={HandleUsername}
                    value={username}
                />
                <input
                    name="password"
                    placeholder="password"
                    type="password"
                    onChange={HandlePassword}
                    value={password}
                />
                <button>submit</button>
            </form>
        </div>
    )
}