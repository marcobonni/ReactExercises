import React from "react"
import { Age } from "./Age"
import Message from "./Message"
export class Hello extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello</h1>
                <Message/>
                <Age age=18 />
            </div>
        )
    }
}