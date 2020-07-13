
import { useState, useEffect } from "react";
import axios from "axios"

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });
  const day = state.day;
  const appointments = state.appointments

  useEffect(() => {
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`),
      axios.get(`/api/interviewers`)
    ]).then((all) => {
      setState(prev => ({...state, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}));
    })
      .catch(err => {
        console.log(err.message);
        })
  }, [day, appointments])

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.put(`/api/appointments/${id}`, {interview: interview})
    .then((res) =>{
    setState({
      ...state,
      appointments })
    return res;
    })
    .catch((error) => {
      console.log(error);
    })
  };

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    return axios.delete(`/api/appointments/${id}`)
    .then((res) => {
      setState({
        ...state,
        appointments
      })
      return res;
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
}