import React from "react";
import CounterDisplay from "./CounterDisplay";



class Counter extends React.Component {
    state = {
         count : this.props.StartValue,
    }
    componentDidMount(){
        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + this.props.IncrementValue,
                }
            })
        }, this.props.TimeValue)
    }
    render() {
        return (
            <div>
                <CounterDisplay count = {this.state.count} />
            </div>
        )
    }
}

Counter.defaultProps = {
    StartValue: 1,
    IncrementValue: 1,
    TimeValue: 1000,

}


export default Counter