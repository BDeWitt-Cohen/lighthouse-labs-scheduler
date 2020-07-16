import React from "react";


//Empty component - rendered by index.js when there are open appointment slots
export default function Empty(props) {
  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={props.onAdd}
      />
  </main>
  )
}