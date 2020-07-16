import React from "react";

//Header component - rendered in index.js for every appointment slot, booked or not
export default function Header(props) {

  return (<header className="appointment__time">
            <h4 className="text--semi-bold">{props.time}</h4>
            <hr className="appointment__separator" />
          </header>)

}