import React from "react"
import Welcome from "./Welcome"

class InteractiveWelcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: ""
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({nome: event.target.value})
    }


    render() {
        const { nome } = this.state;
        return (
            <div>
                <input onChange={this.handleInputChange} />
                <Welcome nome={nome}/>
            </div>
        )
    }
}

export default InteractiveWelcome