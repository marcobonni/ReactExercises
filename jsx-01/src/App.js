import React from "react";
import { LoginHook } from "./UseInput";
import {GitHub2} from "./GitHubUserList"
import { DisplayLanguage } from "./DisplayLanguage";
import {Welcome} from "./Welcome"
import { Routes, Route } from "react-router-dom"; 
function App (){
    // const [showCounter, setShowCounter] = useState(true)

    // function HandleToogleCounter() {
    //     setShowCounter(s => !s)
    // }
        return (
            <div>
                <Routes>
                    <Route path="/:name" element={<Welcome/>}/>
                </Routes>
            </div>
        )
    }

export default App