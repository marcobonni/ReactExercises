import React from "react";

class Login extends React.Component {
    state = {
        username: "",
        password: "",
        remember: false,
    }
    HandleInput = (event) => {
        const {name, type, value, checked} = event.target
        const v = type === "checkbox" ? checked : value;
        this.setState({
            [name] : v,
        })
    }
    // HandleUserNameChange = (event) => {
    //     const value = event.target.value
    //     this.setState({
    //         username: value,
    //         disabled: false,
    //     })
    // } 
    // HandlePasswordChange = (event) => {
    //     const value = event.target.value
    //     this.setState({
    //         password: value,
    //         disabled: false,
    //     })
    // }
    // HandleCheckboxChange = (event) => {
    //     const value = event.target.value
    //     this.setState({
    //         checked: value,
    //     })
    // }
    // HandleOnLogin = (username, password) => {
    //     const { onLogin } = this.props;
    //     onLogin({ username, password});
    // }

    render() {
        return (
            <div className="form">
                <h2>Username</h2>
                <input
                    type="text"
                    name="username"
                    onChange={this.HandleInput}
                    value={this.state.username}
                />
                <h2>password</h2>
                <input type="password"
                    name="password"
                    onChange={this.HandleInput}
                    value={this.state.password}
                />
                <h2>remember</h2>
                <input
                    type="checkbox"
                    name="remember"
                    onChange={this.HandleInput}
                />
                <button 
                    disabled={
                        this.state.username === "" || this.state.password === "" 
                        ? true
                        : false 
                    }
                    onClick={ () => this.props.onLogin(this.state)}>Login</button>
            </div>
        )
    }
}

export default Login