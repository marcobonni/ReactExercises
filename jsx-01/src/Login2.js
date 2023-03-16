import React, { Component } from "react";

class Login2 extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        const username = this.usernameInput.value;
        const password = this.passwordInput.value;
        const remember = this.rememberInput.checked;

        console.log({
            username,
            password,
            remember
        })
        }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="username">
                <input type="text" name="username" autoFocus defaultValue="" ref={(input) => (this.usernameInput = input)}/>
                <input type="password" name="password" defaultValue="" ref={(input) => (this.passwordInput = input)}/>
                <input type="checkbox" name="remember" defaultChecked={false} ref={(input) => (this.rememberInput = input)}/>
                <button type="submit">submit</button>
                <button type="reset">Reset</button>
            </form>
        )
    }
}

export default Login2