import React from "react";
import DayListItem from "components/DayListItem";


export default function Daylist(props) {

  const getSpotsForDay = props.getSpotsForDay;

  const days = props.days.map(day => {
    return <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.day}
      setDay={props.setDay}
      day={day}
      getSpotsForDay={getSpotsForDay}
    />

  });

  return <ul> {days} </ul>
}


