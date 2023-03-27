import React, {useState} from "react";
import {LoginFunc} from "./LoginFunc"
import {Counter} from "./Counter"
function App (){
    const [showCounter, setShowCounter] = useState(true)

    function HandleToogleCounter() {
        setShowCounter(s => !s)
    }
        return (
            <div>
                <LoginFunc/>
                <button onClick={HandleToogleCounter}>Toggle Counter</button>
                {showCounter &&<Counter/>}
            </div>
        )
    }

export default App