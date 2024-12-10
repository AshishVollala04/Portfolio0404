import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="animated-bg"></div>
      <h2 className="animated-title">Experience</h2>
      <div className="experience-card animated">
        <h3>Robotic Process Automation (RPA) Virtual Internship</h3>
        <p><strong>Duration:</strong> Oct-Dec 2021</p>
        <p>
          Acquired in-depth RPA knowledge and skills through 18+ hours of coursework and hands-on experience.
        </p>
        <p>
          Attained valuable insights through independent exploration of process data, driving process improvement.
        </p>
        <p>
          Collaborated with a team of 5 members to expand automation techniques knowledge, enhancing proficiency.
        </p>
      </div>
      <div className="experience-card animated">
        <h3>Process Mining Virtual Internship</h3>
        <p><strong>Duration:</strong> Apr-May 2022</p>
        <p>
          Accumulated extensive process mining knowledge through 20+ hours of coursework.
        </p>
        <p>
          Conducted independent research, generating perceptive findings that contributed to process enhancement.
        </p>
        <p>
          Enhanced proficiency in process analysis techniques, contributing to a 20% increase in accuracy.
        </p>
      </div>
    </section>
  );
}

export default Experience;
