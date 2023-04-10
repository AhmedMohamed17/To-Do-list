import React, { useRef, useState } from "react";
import "./App.css";
import { Item } from "./item";
// my code is not clean becaues i'm save my ideas and my tries in code.
function App() {
  const ToDoList = [
    { id: 1, task: "finish your tasks with nazmy" },
    { id: 2, task: "meeting with your manager AbdelRhman" },
    { id: 3, task: "PS in CodeForce with osama khalil" },
  ];
  const [state, setState] = useState(null);
  const [itemlist, updateitemlist] = useState(ToDoList);
  const todo12 = useRef();

  // const onsearchhandler = (e) => {
  //   let searchitems = [...itemlist].filter((todo) => {
  //     if (e.target.value === "") {
  //       return updateitemlist(itemlist);
  //     } else {
  //       return todo.task.toLowerCase().includes(e.target.value.toLowerCase());
  //     }
  //   });
  //   updateitemlist(searchitems);

  //   console.log("itemlist  = ", e.target.value);
  // };
  const onsearchhandler = (e) => {
    let searchTerm = e.target.value.trim().toLowerCase();
    if (searchTerm === "") {
      updateitemlist(itemlist);
    } else {
      let searchItems = itemlist.filter((todo) =>
        todo.task.toLowerCase().includes(searchTerm)
      );
      updateitemlist(searchItems);
    }
  };
  const onChangehandler = (e) => {
    setState(e.target.value);
  };
  const onhandlesubmit = (e) => {
    e.preventDefault();
    let id = Math.random();
    updateitemlist([...itemlist, { id, task: state }]);
  };
  const onclickhandler = (item) => {
    let changeitems = [...itemlist];
    changeitems = changeitems.filter((e) => e.id !== item.id);
    console.log("changeitems = ", changeitems);
    updateitemlist(changeitems);
    // console.log("itemlist = ", item);
    // const newArr = [...itemlist];
    // console.log("before", newArr);
    // newArr.splice(item, 1);
    // console.log("after", newArr);
    // updateitemlist(newArr);
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
                onChange={onChangehandler}
                type="text"
                className="add"
                placeholder="add to-do"
              />
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
