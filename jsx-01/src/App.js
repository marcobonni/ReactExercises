import React from "react"
import ClickCounter from "./ClickCounter"
import ClickTracker from "./ClickTracker"
import InteractiveWelcome from "./interactiveWelcome"
import Login from "./Login"
class App extends React.Component {
    render() {
        return (
        <div>
            <ClickCounter/>
            <ClickTracker/>
            <InteractiveWelcome/>
            <Login/>
        </div>
        )
    }
}

export default App