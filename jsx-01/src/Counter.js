import { useState } from "react"

export function Counter({ initialValue = 0}) {
    const [data, setData] = useState(initialValue)
    function HandleIncrement(data) {
        setData(data => data + 1)
    }
    return (
        <div>
            <h2>Count : {data}</h2>
            <button onClick={HandleIncrement}>Add</button>
        </div>
    )
}