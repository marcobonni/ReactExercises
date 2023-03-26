import React from "react"
import TodoList2 from "./TodoList2"
function App() {

    return (
        <div>
        <TodoList2
          render={({ items, deleteItem, inputValue, setInputValue, addItem }) => (
            <div>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
              <button onClick={addItem}>Add Item</button>
              <ul>
                {items.map((item, index) => (
                  <li key={index}>
                    {item} <button onClick={() => deleteItem(index)}>Delete</button>
                  </li>
                ))}
              </ul>
              
            </div>
          )}
        />
      </div>
    )
}

export default App