//finding object in state.days who's name matches the provided day
//need to iterate through comparing where that object id matches states.appointments id
//validate for no appointments

const state = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3]
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [4, 5]
    }
  ],
  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": { id: 2, time: "1pm", interview: null },
    "3": {
      id: 3,
      time: "2pm",
      interview: { student: "Archie Cohen", interviewer: 2 }
    },
    "4": { id: 4, time: "3pm", interview: null },
    "5": {
      id: 5,
      time: "4pm",
      interview: { student: "Chad Takahashi", interviewer: 2 }
    }
  }
};



//Filter appointments for a given day
export function getAppointmentsForDay(state, day) {

  const filteredDays = state.days.filter(elem => elem.name === day);

  const finalAppointments = [];

  for (const appointment in state.appointments) {

    if (filteredDays[0]) {
      if (filteredDays[0].appointments.includes(state.appointments[appointment].id)) {
        finalAppointments.push(state.appointments[appointment]);
      }
    }

  }

  return finalAppointments;
}
