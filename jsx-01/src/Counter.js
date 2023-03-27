import { useEffect, useState } from "react"

export function Counter({ initialValue = 0}) {
    const [data, setData] = useState(initialValue)
    function HandleIncrement(data) {
        setData(data => data + 1)
    }
    const [count, setCount] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        setCount((count) => count + 1);
        console.log(count)
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, [count]);
    return (
        <div>
            <h2>Count : {data}</h2>
            <button onClick={HandleIncrement}>Add</button>
        </div>
    )
}