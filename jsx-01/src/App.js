import React from "react";
import { LoginHook } from "./UseInput";
import {GitHub2} from "./GitHubUserList"
import { DisplayLanguage } from "./DisplayLanguage";
import {Welcome} from "./Welcome"
import { Routes, Route } from "react-router-dom"; 
import { NewCounter } from "./NewCounter";
function App (){
    // const [showCounter, setShowCounter] = useState(true)

    // function HandleToogleCounter() {
    //     setShowCounter(s => !s)
    // }
        return (
            <div>
                <Routes>
                    <Route path="/:name" element={<Welcome/>}/>
                    <Route path="/counter" element={<NewCounter/>}/>
                </Routes>
            </div>
        )
    }

export default App