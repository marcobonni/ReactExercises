import React, {useState} from "react";

import { GitHub2 } from "./GitHubUserList";
function App (){
    const [showCounter, setShowCounter] = useState(true)

    function HandleToogleCounter() {
        setShowCounter(s => !s)
    }
        return (
            <div>
                <GitHub2/>
            </div>
        )
    }

export default App