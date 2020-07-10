import React, { Fragment } from 'react'
import "components/Appointment/styles.scss";

import useVisualMode from 'hooks/useVisualMode';

import Header from "components/Appointment/Header"
import Empty from "components/Appointment/Empty"
import Show from "components/Appointment/Show"
import Form from "components/Appointment/Form"
import Status from "components/Appointment/Status"
import Confirm from "components/Appointment/Confirm"


export default function Appointment(props) {
  const EMPTY = "EMPTY"
  const SHOW = "SHOW"
  const CREATE = "CREATE"
  const SAVING = "SAVING"
  const CONFIRM = "CONFIRM"
  const EDIT = "EDIT"
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );


  function save(name, interviewer) {
    transition(SAVING)
    const interview = {
      student: name,
      interviewer
    };


    props.bookInterview(props.id, interview)
    .then(() => {
      
      transition(SHOW)
    })
    
  }

  function cancel(){
    transition(SAVING)
    props.cancelInterview(props.id)
    .then(() => transition(EMPTY))

  }

  function confirm () {
    transition(CONFIRM)
  }

  function edit() {

  }



  return <article className="appointment">
    <Header time={props.time} />
    {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
    {mode === SHOW && (

      <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer}
        onDelete={() => confirm()}
        onEdit={() => transition(EDIT)}
      />
    )}
    {mode === CREATE && (
      <Form
        interviewers={props.interviewers}
        onSave={save}
        onCancel={() => confirm()}
      />
    )}
    {mode === SAVING && (
      <Status />
    )}
    {mode === CONFIRM && (
      <Confirm
      onConfirm={() => cancel()}
      onCancel={() => back()}
       />
    )}
    {mode === EDIT && (
      <Form
      interviewers={props.interviewers}
      name={props.interview.student}
      interviewer={props.interview.interviewer}
      onSave={save}
      onCancel={() => back()}
    />
    )}
  </article>
}