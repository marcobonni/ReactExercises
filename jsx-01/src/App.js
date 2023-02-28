import React from "react"
// import Hello from "./Hello"
import Welcome from "../../my_app/src/Welcome"
import { Age } from "./Age"
export class App extends React.Component {
    render() {
        return (
        <div>
            <Welcome name="Marco"/>
            <Age age = "19" />
        </div>
        )
    }
}