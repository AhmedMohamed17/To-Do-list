import React, { useState, useEffect } from "react";
import "./App.css";
import { Item } from "./item";

/// The Base App
function App() {
  const ToDoList = [
    { id: 1, task: "finish your tasks with nazmy" },
    { id: 2, task: "meeting with your manager AbdelRhman" },
    { id: 3, task: "PS in CodeForce with osama khalil" },
  ];

  ////////  using useState to Store Data
  const [itemlist, SetItemList] = useState([]);
  const [state, setState] = useState(null);
  const [search, setSearch] = useState(null);

  ////// local storage
  let localData = localStorage.getItem("localData");
  localData = JSON.parse(localData);
  useEffect(() => {
    if (localData) {
      SetItemList(localData);
    } else {
      SetItemList(ToDoList);
    }
  }, []);
  // search input Function
  const OnSearchHandler = (e) => {
    let searchTerm = e.target.value.trim().toLowerCase();
    if (searchTerm === "") {
      setSearch(null);
    } else {
      let filteredList = itemlist.filter((item) =>
        item.task.toLowerCase().includes(searchTerm)
      );
      setSearch(filteredList);
    }
  };
  // pass data from input to state
  const onChangeHandler = (e) => {
    setState(e.target.value);
  };
  // Submit Data Function
  const onhandlesubmit = (e) => {
    e.preventDefault();
    let id = Math.random();
    SetItemList([...itemlist, { id, task: state }]);
    e.target.reset();
  };
  // Delete Function
  const onclickhandler = (item) => {
    let changeitems = [...itemlist];
    changeitems = changeitems.filter((e) => e.id !== item.id);
    SetItemList(changeitems);
  };
  /// update localstorage
  useEffect(() => {
    localStorage.setItem("localData", JSON.stringify(itemlist));
  }, [itemlist]);

  return (
    <div>
      <header>
        <div className="main">
          <h1 className="the-title">To-DO List</h1>
          <input
            type="text"
            className="search"
            placeholder="Search"
            onChange={OnSearchHandler}
          />
          <div className="main query">
            <ul>
              <Item items={search || itemlist} ONCliCK={onclickhandler} />
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
