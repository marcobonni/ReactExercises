import React from "react"
import Welcome from "./Welcome"

class InteractiveWelcome extends React.Component {
    state = { 
        inputName : "",
    }
    HandleInputName = () => {
        this.setState(state =>
            {
                return {
                    inputName: state.inputName,
                }
            })
    }


    render() {
        return (
            <div>
                <input />
                <Welcome/>
            </div>
        )
    }
}

export default InteractiveWelcome