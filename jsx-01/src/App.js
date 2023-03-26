import React from "react";
import { Sum } from "./Sum";

class App extends React.Component {
    render() {
        return (
                <Sum numbers={[0,1,2]}/>
        )
    }
}

export default App