import { useState } from "react";
import AddToList from "./AddToList";

function List() {
  function addButtonHandler() {
    alert("You click me");
  }

  const [input, setInput] = useState("");

  function inputHandler(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <h3>List Works</h3>
      <input type="text" id="task" placeholder="Add a task" onChange={inputHandler}/>
      <button type="button" onClick={addButtonHandler}>
        +
      </button>
      <li>{input}</li>
      <AddToList />

    </>
  );
}

export default List;
