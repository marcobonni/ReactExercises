import React, {useState} from "react";
import {LoginFunc} from "./LoginFunc"
import {Counter} from "./Counter"
import { GithubUser } from "./GitHub";
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
                <GithubUser username="marcobonni"/>
            </div>
        )
    }

export default App