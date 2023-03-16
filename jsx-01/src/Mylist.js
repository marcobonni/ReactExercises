import React from "react"


export class Mylist extends React.Component {
    render() {
        const items = this.props.names.map(name => <li>{name}</li>)
        return ( 
            <div>
                <ul>
                   {items}
                </ul>
                <input></input>
                <button type="submit"> add</button>
            </div>
        )
    }

}