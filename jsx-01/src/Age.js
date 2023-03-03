import React from "react";


export class Age {
    render() {
        if (this.props.age > 17) {
            return <p>Your age is: {this.props.age} </p>
        }
        else {
            return <p>You are very young!</p>
        }
    }
}