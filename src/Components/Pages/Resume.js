import React from 'react';
import './Resume.css';
import myResume from '../../Assets/Resume - Mechanical Engineering.pdf';

function Resume() {
  return (
    <div className="resume-container">
      <h1 className="resume-title">My Resume</h1>
      <div className="resume-card">
        <iframe
          src={myResume}
          title="Engineering Resume"
          className="resume-frame"
        ></iframe>
      </div>
    </div>
  );
}

export default Resume;
