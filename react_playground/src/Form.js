import React from "react";

export class Myform extends React.Component {
    state = {
        username : "",
        password : ""
    }
    
    handleInputChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        const type = event.target.type;
        const checked = event.target.checked;

        this.setState({
            [name]: type === "checkbox" ? checked : value,
        })
    }
    componentDidUpdate() {
        console.log(this.state)
    }
    handleResetState = () => {
        this.setState({
            username: "",
            password: "",
            remember: false,
        })
    }
    // handlePasswordChange = (event) => {
    //     const password = event.target.value;
    //     this.setState({
    //         password : password
    //     })
    // }
    // handleCheckboxChange = (event) => {
    //     const name = event.target.name
    //     const checked = event.target.checked
    //     const type = event.target.type
    //     const checked = event.target.checked
    
    // this.setState({
    //     [name]: type === "checked" ? checked : value,
    // })
    // }
    render() {
        return ( 
            <div>
                <h1>My form</h1>
                <button onClick={this.handleResetState}>Reset button</button>
                <h2>username</h2>
                <input 
                    name ="username"
                    value={this.state.username} 
                    onChange={this.handleInputChange} 
                />
                <h2>password</h2>
                <input 
                    name="password"  
                    type="password" 
                    value={this.state.password} 
                    onChange={this.handleInputChange} 
                />
                <input 
                    name="remember"
                    type="checkbox"
                    checked={this.state.remember}
                    onChange={this.handleInputChange}
                />
            </div>
        )
    }
}

export default Myform