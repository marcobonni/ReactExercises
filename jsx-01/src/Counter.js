import React from "react";



class Counter extends React.Component {
    state = {
         count : this.props.StartValue,
    }
    constructor(props) {
        super(props)

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