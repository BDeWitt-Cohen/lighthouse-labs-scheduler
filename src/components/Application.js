import React, { useState, useEffect } from "react";
import axios from 'axios'

import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment/index.js"
import {getAppointmentsForDay, getInterview, getInterviewersForDay} from "helpers/selectors"







export default function Application(props) {

  const setDay = day => setState({ ...state, day });

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`),
      axios.get(`/api/interviewers`)
    ]).then((all) => {
      // console.log(all[0]); // first
      // console.log(all[1]); // second
      console.log(all[2].data);
      setState(prev => ({...state, days: all[0].data,...appointments, appointments: all[1].data, ...interviewers, interviewers: all[2].data}));
        
    })
      .catch(err => {
        console.log(err.message);
        })
}, []);

//If we need to find the values of interviewer by the ID return from the api call move obj.val down here instead
const interViewersArr = Object.values(state.interviewers)

const interviewers = getInterviewersForDay(state, state.day);
console.log("this is interviewers", interviewers);
console.log("this is state", state.interviewers);


const appointments = getAppointmentsForDay(state, state.day);

const schedule = appointments.map((appointment) => {
  const interview = getInterview(state, appointment.interview);



  return (
    <Appointment
      key={appointment.id}
      id={appointment.id}
      time={appointment.time}
      interview={interview}
      interviewers={interViewersArr}
    />
  );
});

 

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
        {schedule}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );
}


