import React from "react";

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        remember: false,
    }
    HandleInput = (event) => {
        const {name, type, value, checked} = event.target
        const v = type === "checkbox" ? checked : value 
        this.setState({
            [name] : v  
        })
    }
    // HandleUserNameChange = (event) => {
    //     const value = event.target.value
    //     this.setState({
    //         username: value,
    //     })
    // } 
    // HandlePasswordChange = (event) => {
    //     const value = event.target.value
    //     this.setState({
    //         password: value,
    //     })
    // }
    // HandleCheckboxChange = (event) => {
    //     const value = event.target.value
    //     this.setState({
    //         checked: value,
    //     })
    // }
    render() {
        return (
            <div>
                <input
                    type="text"
                    name="username"
                    onChange={this.HandleInput}
                    value={this.state.username}
                />
                <input type="password"
                    name="password"
                    onChange={this.HandleInput}
                    value={this.state.password}
                />
                <input
                    type="checkbox"
                    name="remember"
                    onChange={this.HandleInput}
                />
            </div>
        )
    }
}

export default Login