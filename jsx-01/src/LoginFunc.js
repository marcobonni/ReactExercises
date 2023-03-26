import React, { useState } from "react"

export function LoginFunc() {
    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false,
    })
    function handleInput(event)  {
        const {name, type, value, checked} = event.target
        setData((data) => {
            return {
                ...data,
                [name] : type === "checkbox" ? checked : value
            }
        }
        )
        console.log(data)
    }
    return (
        <div>
            <input name="username" onChange={handleInput} value={data.username} placeholder="username"/>
            <input name="password" onChange={handleInput} type="password" value={data.password} placeholder="password"/>
            <input type="checkbox" name="remember" onChange={handleInput}></input>
            <button name="login" type="submit">Login</button>
        </div>
    )
}