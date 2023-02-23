import React from "react"
import { HelloWorld } from "./HelloWorld"
import Welcome from "./Welcome"

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>My Awesome Application</h1>
                <Welcome name="Marco"/>
            </div>
        )
    }
}

export default App