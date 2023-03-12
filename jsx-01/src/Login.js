import React from "react";

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        checked: "",
        disabled: true,
    }
    HandleUserNameChange = (event) => {
        const value = event.target.value
        this.setState({
            username: value,
            disabled: false,
        })
    }
    HandlePasswordChange = (event) => {
        const value = event.target.value
        this.setState({
            password: value,
            disabled: false,
        })
    }
    HandleCheckboxChange = (event) => {
        const value = event.target.value
        this.setState({
            checked: value,
        })
    }
    HandleOnLogin = (username, password) => {
        const { onLogin } = this.props;
        onLogin({ username, password });
    }
    HandleReset = () => {
        this.setState({
            username: "",
            password: "",
            checked: "",
            disabled: true
        })
    }
    render() {
        return (
            <div className="form">
                <h2>Username</h2>
                <input
                    type="text"
                    name="username"
                    onChange={this.HandleUserNameChange}
                    value={this.state.username}
                />
                <h2>password</h2>
                <input type="password"
                    name="password"
                    onChange={this.HandlePasswordChange}
                    value={this.state.password}
                />
                <h2>remember</h2>
                <input
                    type="checkbox"
                    name="remember"
                    onChange={this.HandleCheckboxChange}
                    value={this.state.checked}
                />
                <button disabled={this.state.disabled} onClick={this.HandleOnLogin}>Login</button>
                <button onClick={this.HandleReset}>Reset</button>
            </div>
        )
    }
}

export default Login