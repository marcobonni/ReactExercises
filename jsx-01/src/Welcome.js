import React from "react";
import { Age } from "./Age";
export class Welcome extends React.Component {
    render() {
        return (
            <div>
                {!!this.props.name && <p><strong>Welcome {this.props.name}!</strong></p>}
                {!this.props.name && <p>Welcome User!</p>}
                <Age/>
            </div>
        )
    }
}