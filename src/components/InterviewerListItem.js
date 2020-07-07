import React from "react";
import "components/InterviewerListItem.scss"
import classnames from "classnames"


export default function InterviewerListItem(props){

//will need selected and clickable classes - need action for clickable
//need to see what comes through in the props
//props. id, name, avatar
const interviewerClass = classnames("interviewers__item", { 
  "interviewers__item--selected": props.selected

})

return (
<li className={interviewerClass} onClick={props.setInterviewer}>
  <img
    className="interviewers__item-image"
    src={props.avatar}
    alt="Sylvia Palmer"
  />
  {props.name}
</li>)



}