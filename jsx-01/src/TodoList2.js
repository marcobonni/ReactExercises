import React, { useState } from "react";

function TodoList2({ render }) {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function deleteItem(index) {
    setItems(items.filter((_, i) => i !== index));
  }
  function addItem() {
    setItems([...items, inputValue])
    setInputValue("");
  }

  return render({ items, deleteItem, inputValue, setInputValue, addItem });
}

export default TodoList2;