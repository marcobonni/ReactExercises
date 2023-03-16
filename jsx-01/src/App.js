import React from "react"
import ClickCounter from "./ClickCounter"
import ClickTracker from "./ClickTracker"
import InteractiveWelcome from "./interactiveWelcome"
import Login2 from "./Login2"
class App extends React.Component {
    render() {
        return (
        <div>
            <ClickCounter/>
            <ClickTracker/>
            <InteractiveWelcome/>
            <Login2/>
        </div>
        )
    }
}

export default App