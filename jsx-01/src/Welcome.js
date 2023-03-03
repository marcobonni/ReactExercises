import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render() {
        if (this.props.age > 17 && !this.props.age === undefined) {
            return (
                <div>
                    {!!this.props.name && <p>Welcome {this.props.name}!</p>}
                    {!this.props.name && <p>Welcome User!</p>}
                    <Age />
                </div>
            )
        }
    }
}