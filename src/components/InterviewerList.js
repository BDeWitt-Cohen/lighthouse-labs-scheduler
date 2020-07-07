import React from "react";
import "components/InterviewerList.scss"
import classnames from "classnames"
import InterviewerListItem from "./InterviewerListItem";





export default function InterviewerList(props) {


  //need to find out if I need this in here or not //console
  const interviewersList = classnames("interviewers", {
    "interviewers__list": props.interviewers
  })



  const singleInterviewer = props.interviewers.map(interviewer => {
    if (interviewer.id === props.interviewer) {
      return <InterviewerListItem
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={event => props.setInterviewer(interviewer.id)}
      />

    }
    else {
      return <InterviewerListItem
        key={interviewer.id}
        avatar={interviewer.avatar}
        selected={interviewer.id === props.interviewer}
        setInterviewer={event => props.setInterviewer(interviewer.id)}
      />

    }
  })





  return <section className={"interviewers"}>
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <div className="interviewers__list"> {singleInterviewer} </div>
  </section>
}


