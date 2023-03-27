import React from "react";
import {LoginFunc} from "./LoginFunc"
import {Counter} from "./Counter"
class App extends React.Component {
    render() {
        return (
            <div>
                <LoginFunc/>
                <Counter/>
            </div>
        )
    }
}

export default App