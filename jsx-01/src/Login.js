import React from "react";

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        checked: "",
    }
    HandleUserNameChange = (event) => {
        const value = event.target.value
        this.setState({
            username: value,
        })
    } 
    HandlePasswordChange = (event) => {
        const value = event.target.value
        this.setState({
            password: value,
        })
    }
    HandleCheckboxChange = (event) => {
        const value = event.target.value
        this.setState({
            checked: value,
        })
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    name="username"
                    onChange={this.HandleUserNameChange}
                    value={this.state.username}
                />
                <input type="password"
                    name="password"
                    onChange={this.HandlePasswordChange}
                    value={this.state.password}
                />
                <input
                    type="checkbox"
                    name="remember"
                    onChange={this.HandleCheckboxChange}
                    value={this.state.checked}
                />
            </div>
        )
    }
}

export default Login