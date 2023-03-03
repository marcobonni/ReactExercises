import React from "react"

import  Counter  from "./Counter"


  export class App extends React.Component {
    render() {
        return (
        <div>
            <Counter StartValue ={25} IncrementValue = {2} TimeInterval = {500} />
        </div>
        )
    }
}

export default App