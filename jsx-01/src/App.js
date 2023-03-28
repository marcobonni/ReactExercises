import React from "react";
import { LoginHook } from "./UseInput";
import {GitHub2} from "./GitHubUserList"
import { DisplayLanguage } from "./DisplayLanguage";
import {Welcome} from "./Welcome"
import { Routes, Route } from "react-router-dom"; 
import { NewCounter } from "./NewCounter";
import { GithubParameter } from "./GitHub3";
import { Link } from "react-router-dom";
import { Product } from "./Product";
import { Error404 } from "./Error404";
function App (){
    // const [showCounter, setShowCounter] = useState(true)

    // function HandleToogleCounter() {
    //     setShowCounter(s => !s)
    // }
        return (
            <div>
                    <Link to="/:name">welcome</Link>
                    <Link to="/counter">Counter</Link>
                    <Link to="users/:username">Github</Link>
                    <Link to="/">Back Home</Link>
                    <Link to="/:id">Id</Link>
                <Routes>
                    
                    {/* <Route path="/:name" element={<Welcome/>}/> */}
                    <Route path="/counter" element={<NewCounter/>}/>
                    <Route path="/users/:username" element={<GithubParameter/>}/>
                    {/* <Route path="/:id" element={<Product/>}/> */}
                    <Route path="*" element={<Error404/>}/>
                </Routes>
            </div>
        )
    }

export default App