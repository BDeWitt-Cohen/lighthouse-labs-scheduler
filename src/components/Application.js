import React, { Fragment, useState, useEffect } from "react";
import axios from 'axios'

import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment/index.js"
import getAppointmentsForDay from "helpers/selectors"







export default function Application(props) {

  const setDay = day => setState({ ...state, day });

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}
  });

  useEffect(() => {
    
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`)
    ]).then((all) => {
      console.log(all[0]); // first
      console.log(all[1]); // second
      setState(prev => ({...state, days: all[0].data,...appointments, appointments: all[1].data}));
        
    })
      .catch(err => {
        console.log(err.message);
        })
}, []);
 const appointments = getAppointmentsForDay(state, state.day)

  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            day={state.day}
            setDay={setDay} />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {appointments.map((appointment) => 
          <Appointment key={appointment.id} {...appointment} />
           )}
          <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}


