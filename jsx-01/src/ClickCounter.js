import React from "react";
import CounterDisplay from "./CounterDisplay";



class ClickCounter extends React.Component {
    state = {
        count: 0
    }

    handleCounterIncrement = () => {
        this.setState(state => {
            return {
                count: state.count + 1,
            }
        })
    }
    handleCounterDecrement =() => {
        this.setState(state => {
            return {
                count: state.count - 1,
            }
        })
    }

    render() {
        return (
            <div>
                <CounterDisplay count={this.state.count} />
                <button onClick={this.handleCounterIncrement}>+</button>
                <button onClick={this.handleCounterDecrement}>-</button>
            </div>
        )
    }
}
export default ClickCounter