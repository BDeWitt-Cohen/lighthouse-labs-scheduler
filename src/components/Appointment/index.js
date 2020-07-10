import React, { Fragment } from 'react'
import "components/Appointment/styles.scss";


import Header from "components/Appointment/Header"
import Empty from "components/Appointment/Empty"
import Show from "components/Appointment/Show"
import useVisualMode from 'hooks/useVisualMode';
import Form from "components/Appointment/Form"


export default function Appointment(props) {
  const EMPTY = "EMPTY"
  const SHOW = "SHOW"
  const CREATE = "CREATE"
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );


  function save(name, interviewer) {
    
    console.log(name, interviewer);
    const interview = {
      student: name,
      interviewer
    };

    props.bookInterview(props.id, interview)
    .then(() => {
      transition(SHOW)
    })
    
  }
  

console.log("props in index", props)
console.log(props.id);


  return <article className="appointment">
    <Header time={props.time} />
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && (

      <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
      />
    )}
    {mode === CREATE && (
      <Form
        interviewers={props.interviewers}
        onSave={save}
        onCancel={() => back()}
      />
    )}
  </article>
}