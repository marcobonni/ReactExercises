import React from "react";

export class Welcome extends React.Component {
    render() {
        if (this.props.age > 17) {
            return (
                <div>
                    {!!this.props.name && <p>Welcome {this.props.name}!</p>}
                    {!this.props.name && <p>Welcome User!</p>}
                </div>
            )
        }
    }
}