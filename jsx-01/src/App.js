import React from "react";
import { LanguageContext } from "./LanguageContext";
import Welcome from "./Welcome";
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
                </LanguageContext.Provider>
            </div>
        )
    }
}

export default App