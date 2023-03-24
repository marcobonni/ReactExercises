import React from "react"
import Login from "./Login"
import  Container  from "./Container"
class App extends React.Component {

    render() {
        return (
            <div>
                <Container />
                <Login/>
            </div>
        )
    }
}

export default App