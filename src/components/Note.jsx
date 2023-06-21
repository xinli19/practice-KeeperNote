import React from "react";
import ReactDOM from "react-dom";

export default function Note(props) {
  const executeDelete = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={executeDelete}>DELETE</button>
    </div>
  );
}
