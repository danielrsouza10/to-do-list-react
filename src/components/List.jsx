import { useState } from "react";
import AddToList from "./AddToList";

function List() {

  const [itemList, setItemList] = useState("")

  function addButtonHandler() {
    setItemList(input);
  }

  const [input, setInput] = useState("");

  function inputHandler(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <h3>List Works</h3>
      <input
        type="text"
        id="task"
        placeholder="Add a task"
        onChange={inputHandler}
      />
      <button type="button" onClick={addButtonHandler}>
        +
      </button>
      <ul>
        <AddToList />
        <li>{itemList}</li>
      </ul>
    </>
  );
}

export default List;
