import React from "react";
export default function Todo({item, idx, completeItem }) {

  return (
    <li
      className="todoItem"
      onClick={() => completeItem(idx)}
      style={{ textDecoration: item.isCompleted ? "line-through" : ""}}
    >
      {item.text}
    </li>

  )
}
