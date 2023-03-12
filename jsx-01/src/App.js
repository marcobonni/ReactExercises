import React from "react"
import ClickCounter from "./ClickCounter"
import ClickTracker from "./ClickTracker"
import InteractiveWelcome from "./interactiveWelcome"
class App extends React.Component {
    render() {
        return (
        <div>
            <ClickCounter/>
            <ClickTracker/>
            <InteractiveWelcome/>
        </div>
        )
    }
}

export default App