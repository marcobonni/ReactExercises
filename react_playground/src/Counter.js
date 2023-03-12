import React from "react"


class Counter extends React.Component {
    state = { 
        count: 0
    }


    handleCounterIncrement = () => {
        this.setState((state) => {
            return {
                count : state.count + 1,
            }
        })
    }
    handleButtonClick = (event) => {
        console.log(
            event.target.name,
            event.timestamp,
            event.button
        )
    }
    render() {
        return (
            <button name="works" onClick={this.handleButtonClick}>
            <h3>Counter: {this.state.count}</h3>
            </button>
        )
    }
}

export default Counter