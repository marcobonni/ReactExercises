import React from "react";



class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count : this.props.StartValue
        }
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + this.props.IncrementValue,
                }
            })
        }, this.props.TimeInterval)
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
            </div>
        )

    }
}


export default Counter