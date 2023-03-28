import { useState } from "react"
import { useParams } from "react-router-dom"

export function GithubParameter() {
    const { username } = useParams() 
    const [data, setData] = useState([])
    async function getData(username){
    const response =  fetch(`https://api.github.com/users/${username}`)
    const json = response.json
    setData(json)
    console.log(data)

    return {
        data
    }
    }
    const data2 = getData(username)
    return (
        <div>
            <p>{data2.name}</p>
        </div>
    )
}