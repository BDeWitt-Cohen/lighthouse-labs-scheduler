import React from "react";
import "components/DayListItem.scss"
import classnames from "classnames"


//DayListItem component - shows each individual day, rendered in daylist.js
export default function DayListItem(props) {

  const getSpotsForDay = props.getSpotsForDay;

  //Helper function to display the number of remaining spots with the appropriate wording
  const formatSpots = function(spots) {
    if (spots === 1) {
      return spots + " spot remaining"
    }
    else if (spots >= 2) {
      return spots + " spots remaining"
    } else {
      return "no spots remaining"
    }
  };

  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  return (
    <li data-testid="day" className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(getSpotsForDay(props.name))}</h3>
    </li>
  );
}

