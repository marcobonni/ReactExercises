import React from "react";

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        checked: false,
        disabled: true,
    }   
    handleInputChange = (event) => {
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked
        this.setState({
            [name]: type === "checkbox" ? checked : value,
            disabled: false,
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
            checked: false,
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
                    onChange={this.handleInputChange}
                    value={this.state.username}
                />
                <h2>password</h2>
                <input type="password"
                    name="password"
                    onChange={this.handleInputChange}
                    value={this.state.password}
                />
                <h2>remember</h2>
                <input
                    type="checkbox"
                    name="remember"
                    onChange={this.handleInputChange}
                    value={this.state.checked}
                />
                <button disabled={this.state.disabled} onClick={this.HandleOnLogin}>Login</button>
                <button onClick={this.HandleReset}>Reset</button>
            </div>
        )
    }
}

export default Login