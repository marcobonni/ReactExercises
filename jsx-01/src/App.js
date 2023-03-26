import React from "react";
import { LanguageContext } from "./LanguageContext";
import { Sum } from "./Sum";
import Welcome from "./Welcome";
import {Welcome2} from "./Welcome2"
class App extends React.Component {
    state = {
        language: "en"
    }

    handleLanguageChange = (event) => {
        this.setState({
            language: event.target.value
        })
    }
    render() {
        return (
            <div>
                <select value={this.state.language} onChange={this.handleLanguageChange}>
                    <option value="en">English</option>
                    <option value="it">Italiano</option>
                </select>
                <LanguageContext.Provider value={this.state.language}>
                <Welcome/>
                <Welcome2 name="Marco"/>
                <Sum numbers={[0,1,2,3,4,5]}/>
                </LanguageContext.Provider>
            </div>
        )
    }
}

export default App