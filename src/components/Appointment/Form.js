import React, { useState } from 'react';
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";


//Form component - rendered in index.js when creating a new appointment, can input student name and select interviewer
export default function Form(props) {

  //State hooks
  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer || null);
  const [error, setError] = useState("");

  //resets student name and interviewer
  const reset = function() {
    setName("");
    setInterviewer(null);
  };

  //cancel button on form component
  const cancel = function() {
    reset();
    props.onCancel();
  };

  //name validation to ensure a value is input
  function validate() {
    if (name === "") {
      setError("Student name cannot be blank");
      return;
    }
    setError("");
    props.onSave(name, interviewer);
  };

  return (
    <main className="appointment__card appointment__card--create">
      <section className="appointment__card-left">
        <form autoComplete="off">
          <input
            className="appointment__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            data-testid="student-name-input"
          />
          <section className="appointment__validation">{error}</section>
        </form>
        <InterviewerList
          id={props.id}
          interviewers={props.interviewers}
          interviewer={interviewer}
          setInterviewer={setInterviewer}
        />
      </section>
      <section className="appointment__card-right">
        <section className="appointment__actions">
          <Button danger onClick={cancel}>Cancel</Button>
          <Button confirm onClick={() => validate()}>Save</Button>
        </section>
      </section>
    </main>
  );
};
