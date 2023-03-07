import React from "react";
import Age from "./Age"
export default class Welcome extends React.Component {
    render() {
        return (
            <div className="paperino">
                {
                this.props.age >= 18 ? <Age age={this.props.age}/> : <p>Welcome, User</p>
                }
            </div>
        )
    }
}