import React from "react";
import { Link } from "react-router-dom";

export function Catalogue() {
    return (
        <div>
                    <Link to="/:name">welcome</Link>
                    <Link to="/counter">Counter</Link>
                    <Link to="users/:username">Github</Link>
                    <Link to="/">Back Home</Link>
                    <link to="/catalogue">catalogue</link>
                    <Link to="/:id">Id</Link>
        </div>
    )
}