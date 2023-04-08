import React, { useRef, useState } from "react";
import "./App.css";
import { Item } from "./item";
function App() {
  const ToDoList = [
    { id: 1, task: "Finish your tasks with nazmy" },
    { id: 2, task: "meeting with your manager AbdelRhman" },
    { id: 3, task: "PS in CodeForce with osama khalil" },
  ];
  const [state, setState] = useState(null);
  const [itemlist, updateitemlist] = useState(ToDoList);

  const todo = useRef();

  const onChangehandler = (e) => {
    setState(e.target.value);
  };
  const onhandlesubmit = (e) => {
    e.preventDefault();
    let id = Math.random();
    updateitemlist([...itemlist, { id, task: state }]);
  };
  const onclickhandler = (item) => {
    let changeitems = itemlist.filter((e) => e.id !== item.id);

    updateitemlist({ itemlist: changeitems });
  };

  return (
    <div>
      <header>
        <div className="main">
          <h1 className="the-title">To-DO List</h1>
          <form>
            <input type="text" className="search" placeholder="search" />
          </form>

          <div className="main query">
            <ul>
              <Item items={itemlist} ONCliCK={onclickhandler} />
            </ul>
          </div>
          <div>
            <form onSubmit={onhandlesubmit}>
              <input
                onChange={onChangehandler}
                ref={todo}
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
