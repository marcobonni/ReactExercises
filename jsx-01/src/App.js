import React from "react"
import ClickCounter from "./ClickCounter"
import ClickTracker from "./ClickTracker"
import InteractiveWelcome from "./interactiveWelcome"
import Login2 from "./Login2"
import TodoList from "./TodoList"
class App extends React.Component {

    render() {
        return (
        <div>
            <ClickCounter/>
            <ClickTracker/>
            <InteractiveWelcome/>
            <Login2/>       
            <TodoList/>
        </div>
        )
    }
}

export default App