import { useEffect, useState } from "react";
import React from "react";
function useFetchGitHub() {
    const [data, setData] = useState([])
    const [variable, setVariable] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    async function gettingdata(input) {
        const response = await fetch(`https://api.github.com/users/${input}`)
        if (response.status !== 200) {
            setError(true)
        }
        const json = await response.json()
        setData(json)
        setLoading(true)
    }
    
    useEffect(() => {
        gettingdata(variable)
    }, [variable])

    const HandleChange = (event) => {
        setVariable(event.target.value)
    }

   
    return {
        data, variable, HandleChange, error, loading
    }
}
export function GitHub2({ name = "marcobonni" }) {
    const {data, variable, HandleChange, error, loading} = useFetchGitHub()
    const [list, setList] = useState([])
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
                {loading === false && <li>loading</li>}
                {error === true && <li>Error</li> }
                {error && loading && list.map((el, id) => {
                    return (
                        <li key={id}>{id + 1} {el} </li>
                    )
                })}
            </ul>
        </div>
    )
}