import React from "react";
export class Welcome extends React.Component {
    render() {
            return (
                <div className="welcome">
                    <p>Welcome, {this.props.nome}</p>
                </div>
            )
}
}


export default Welcome