import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render() {
            return (
                {
                    this.props.age > 18 && this.props < 65 
                    ?   <Age age={this.props.age}/>
                    :   <p>Welcome, User</p>
                }
            )
        }
    }