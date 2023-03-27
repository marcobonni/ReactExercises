import { useEffect, useState } from "react";

export function GitHub2({ name = "marcobonni" }) {
    const [data, setData] = useState([])
    const [variable, setVariable] = useState("")
    const [list, setList] = useState([])

    async function gettingdata(input) {
        const response = await fetch(`https://api.github.com/users/${input}`)
        const json = await response.json()
        setData(json)
    }
    
    useEffect(() => {
        gettingdata(variable)
    }, [variable])

    const HandleChange = (event) => {
        setVariable(event.target.value)
    }

    const PrintInput = () => {
        setList([...list, data.name])
        console.log(list)
    }

    return (
        <div>
            <input placeholder="username" onChange={HandleChange} value={variable} />
            <button onClick={PrintInput}>
                Add
            </button>
            <ul>
                {data && <li>{data.name}</li>}
                {data && <li>{data.id}</li>}
            </ul>
            <ul>
                <h1>Lista</h1>
                {list.map((el, id) => {
                    return (
                        <li key={id}>{id + 1} {el} </li>
                    )
                })}
            </ul>
        </div>
    )
}