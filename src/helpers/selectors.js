//finding object in state.days who's name matches the provided day
//need to iterate through comparing where that object id matches states.appointments id
//validate for no appointments

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
};

// Format interview data to return object with student and interviewer data
export function getInterview(state, interview) {

  if (!interview) {
    return null
  }

  const finalInterview = {
    ...interview,
    interviewer: {
      ...state.interviewers[interview.interviewer]
    }
  };

  return finalInterview;
};



