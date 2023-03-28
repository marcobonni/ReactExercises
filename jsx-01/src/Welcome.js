import React from "react";
import { useParams } from "react-router-dom";

export function Welcome() {
    const {name = "World"} = useParams()
    return (
        <div>
            <p>Hello, {name}</p>
        </div>
    )
}