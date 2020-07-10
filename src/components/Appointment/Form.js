import React, { useState } from 'react'
import Button from "components/Button"
import InterviewerList from "components/InterviewerList"


export default function Form(props) {

  const [name, setName] = useState(props.name || "");
  const [interviewer, setInterviewer] = useState(props.interviewer ? props.interviewer.id : []);

  const reset = function() {
    setName("");
    setInterviewer(null);
  }

  const cancel = function(){
    reset();
    props.onCancel();
  }

  return (<main className="appointment__card appointment__card--create">
            <section className="appointment__card-left">
              <form autoComplete="off">
                <input
                  name="name"
                  className="appointment__create-input text--semi-bold"
                  value={name}
                  type="text"
                  placeholder="Enter Student Name"
                  onSubmit={event => event.preventDefault()}                  
                  onChange={(event) => setName(event.target.value)}
                />       
              </form>
              <InterviewerList
                interviewer={interviewer} 
                value={interviewer} 
                interviewers={props.interviewers}  
                setInterviewer={(event) => setInterviewer(event)} 
              />
            </section>
            <section className="appointment__card-right">
              <section className="appointment__actions">
                <Button danger onClick={cancel}>Cancel</Button>
                <Button confirm onClick={() => props.onSave(name, interviewer)}>Save</Button>
              </section>
            </section>
          </main>)

}
