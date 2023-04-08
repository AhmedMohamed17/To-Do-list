import React from "react";
import "./App.css";

export const Item = React.memo(({ items, ONCliCK }) => {
  console.log("items = ", items);

  return (
    <React.Fragment>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.task}</span>
          <span onClick={() => ONCliCK(item)}>
            <i className="far fa-trash-alt delete"></i>
          </span>
        </li>
      ))}
    </React.Fragment>
  );
});
