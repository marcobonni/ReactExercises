import React from "react"
import Counter from "./Counter"
import ClickCounter from "./ClickCounter"

class App extends React.Component {
    render() {
        return (
        <div>
            <ClickCounter/>
        </div>
        )
    }
}

export default App