import React from "react"
import { HelloWorld } from "./HelloWorld"

class Welcome extends React.Component {
    render() {
        return (
            <div>
                {/* {this.props.name 
                ? <h2>Hello, {this.props.name}</h2> 
                : <h2>Hello, World</h2>} */}
                {!!this.props.name && <h2>Hello, {this.props.name}</h2>}
                {!this.props.name && <HelloWorld/>}
            </div>
        )
    }
}

export default Welcome