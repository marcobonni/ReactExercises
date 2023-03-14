import React from "react"
import ClickCounter from "./ClickCounter"
import ClickTracker from "./ClickTracker"
import InteractiveWelcome from "./interactiveWelcome"
import Login from "./Login"
class App extends React.Component {
    onLogin = (user) => console.log(user)  
    render() {
        return (
        <div>
            <ClickCounter/>
            <ClickTracker/>
            <InteractiveWelcome/>
            <Login onLogin={this.onLogin}/>
        </div>
        )
    }
}

export default App