import React from "react";
import { Age } from "./Age";

export default class Welcome extends React.Component {
    render() {
            return (
                <div>
                    {
                        !this.props.age === undefined
                        ? <Age age={this.props.age}/>
                        : <p>Welcome, User</p>
                    }
                </div>
            )
    }
}