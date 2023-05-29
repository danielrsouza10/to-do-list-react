import { useState } from "react";
import { createElement } from "react";
import AddToList from "./AddToList";

function List() {
  let items = ["Daniel", "Mariana", "Isabela"];
  let [itemList, setItemList] = useState([]);


  function addButtonHandler() {
    //push new input into the array items
    items.push(input);
 
    setItemList(items.map((item) => <li>{item}</li>));
    console.log(input);
  }

  // const itemList = items.map((item) => <li>{item}</li>);

  const [input, setInput] = useState("");

  function inputHandler(e) {
    setInput(e.target.value);
  }

  return (
    <>
      <AddToList
        onInputChange={inputHandler}
        onClickButton={addButtonHandler}
      />
      <ul>{itemList}</ul>
    </>
  );
}

export default List;
