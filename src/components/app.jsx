import React, { useRef, useState } from "react";
import "./App.css";
import { Item } from "./item";

function App() {
  /// The Base App
  const ToDoList = [
    { id: 1, task: "finish your tasks with nazmy" },
    { id: 2, task: "meeting with your manager AbdelRhman" },
    { id: 3, task: "PS in CodeForce with osama khalil" },
  ];
  ////////  using useState to Store Data and UseRef
  const [itemlist, SetItemList] = useState(ToDoList);
  const [state, setState] = useState(null);
  const todo12 = useRef(null);

  const onsearchhandler = (e) => {
    // search input Function
    let searchTerm = e.target.value.trim().toLowerCase();
    if (searchTerm === "") {
      console.log("the search");
    } else {
      let searchItems = itemlist.filter((todo) =>
        todo.task.toLowerCase().includes(searchTerm)
      );
      SetItemList(searchItems);
    }
  };
  const onChangeHandler = (e) => {
    // pass data from input data tag to setState
    setState(e.target.value);
  };
  const onhandlesubmit = (e) => {
    // Submit Data Function
    e.preventDefault();
    let id = Math.random();
    SetItemList([...itemlist, { id, task: state }]);
  };
  const onclickhandler = (item) => {
    // Delete Function
    let changeitems = [...itemlist];
    changeitems = changeitems.filter((e) => e.id !== item.id);
    SetItemList(changeitems);
  };

  return (
    <div>
      <header>
        <div className="main">
          <h1 className="the-title">To-DO List</h1>
          <input
            type="text"
            className="search"
            placeholder="search"
            onChange={onsearchhandler}
          />
          <div className="main query">
            <ul ref={todo12}>
              <Item items={itemlist} ONCliCK={onclickhandler} />
            </ul>
          </div>
          <div>
            <form onSubmit={onhandlesubmit}>
              <input
                onChange={onChangeHandler}
                type="text"
                className="add"
                placeholder="Add To-Do"
              />
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
