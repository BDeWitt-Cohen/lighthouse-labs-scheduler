import React, { Fragment } from 'react'
import "components/Appointment/styles.scss";


import Header from "components/Appointment/Header"
import Empty from "components/Appointment/Empty"
import Show from "components/Appointment/Show"


export default function Appointment(props) {
  
  
  return <article className="appointment">

              {props.interview ? ( <div>
                                            <Header time={props.time} />
                                      <Show 
                                      student={props.interview.student}
                                      interviewer={props.interview.interviewer}
                                      />
                                    </div>
              ) : (
                <div>
                  <Header time={props.time} />
                  <Empty />
                </div> 
              )}
          </article>
}