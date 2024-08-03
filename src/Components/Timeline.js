import React from "react";
import './Timeline.css';
import { MDBContainer } from "mdb-react-ui-kit";

const Timeline = () => {
  return (
    <MDBContainer className="py-5">
      <ul className="timeline" style={{textAlign:"left",color:'white'}}>
      <li className="timeline-item mb-5">
          <h5 className="fw-bold">Pre final year Student</h5>
          <p className="text-muted mb-2 fw-bold">2022-2026</p>
          <p className="text-muted">
          As a pre-final year Computer Science Engineering student of Indira Gandhi Delhi Technical University for Women with an 8.25 CGPA in the first four semesters,
           I have developed a passion for web development and programming, actively working on projects and enhancing my skills in technology.
          </p>
        </li>
        <li className="timeline-item mb-5">
          <h5 className="fw-bold">Web Development Intern</h5>
          <p className="text-muted mb-2 fw-bold">May 2023- July 2023</p>
          <p className="text-muted">
          Gained proficiency in HTML, CSS, and JavaScript to
 create structured, styled, and interactive web pages. Implemented responsive design principles, interactive elements, and
 functionality.
          </p>
        </li>
        

        <li className="timeline-item mb-5" style={{marginBottom: '10rem'}}>
          <h5 className="fw-bold">High school graduate</h5>
          <p className="text-muted mb-2 fw-bold">2020-2021</p>
          <p className="text-muted">
          I graduated from School of Excellence, Dwarka with a strong 94.5% in my 12th standard with PCMB as subjects.
          </p>
        </li>
      </ul>
    </MDBContainer>
  );
};

export default Timeline;
