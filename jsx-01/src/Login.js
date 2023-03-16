import React, { createRef } from "react";

class Login extends React.Component {
    _formRef = createRef()
    // state = {
    //     username: "",
    //     password: "",
    //     checked: "",
    //     disabled: true,
    // }
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
    //     onLogin({ username, password });
    // }
    HandleReset = () => {
        this.setState({
            username: "",
            password: "",
            checked: "",
            disabled: true
        })
    }
    handleFormSubmit = (event) => {
        event.preventDefault()
        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log(
            username, 
            password,
            remember
        )
    }
    HandleInput = (event) => {
        const value = event.target.elements.username.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked
        this.setState({
            [name]: type === "checkbox" ? checked : value,
            [name]: type === "disabled" ? false : true,
        })
    }
    render() {
        return (
            <form ref={this._formRef} className="form" onSubmit={this.handleFormSubmit}>
                <h2>Username</h2>
                <input
                    defaultValue= ""
                    ref={this.myref}
                    type="text"
                    name="username"
                    onChange={this.HandleInput}
                    value={this.state.username}
                />
                <h2>password</h2>
                <input
                    defaultValue=""
                    ref={this.myref}
                    type="password"
                    name="password"
                    onChange={this.HandleInput}
                    value={this.state.password}
                />
                <h2>remember</h2>
                <input
                    defaultChecked=""
                    ref={this.myref}
                    type="checkbox"
                    name="remember"
                    onChange={this.HandleInput}
                    checked={this.state.checked}
                />
                <button type="disabled">Login</button>
                <button>Reset</button>
                <button onSubmit={this.handleFormSubmit}></button>
                
            </form>
        )
    }
}

export default Login