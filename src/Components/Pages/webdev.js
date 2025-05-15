// webdev.js
import React from 'react';
import './webdev.css';

import timerImg from '../../Assets/plugin_timer.png';
import tasksImg from '../../Assets/plugin_tasks.png';
import workflowImg from '../../Assets/plugin_workflow.png';
import siteImg from '../../Assets/portfolio_site.png';

function WebDevPopup({ title, onClose }) {
  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-popup-card-solid" onClick={(e) => e.stopPropagation()}>
        <span className="popup-close" onClick={onClose}>&times;</span>

        <div className="popup-scrollable-content">
          {/* INTRODUCTION */}
          <div className="popup-section">
            <h1 className="popup-title-solid">{title}</h1>
            <div className="popup-grid-solid">
              <div className="popup-left-solid">
                <p><span className="popup-label">Role:</span> Independent Developer</p>
                <p><span className="popup-label">Timeline:</span> Summer 2024 – Present</p>
                <p><span className="popup-label">Skills:</span> React.js, JavaScript, GitHub, CSS</p>
              </div>
              <div className="popup-right-solid">
                <img src={workflowImg} alt="Dynamic Workflow Template Plugin" className="popup-image-solid" />
              </div>
            </div>
          </div>

          {/* OVERVIEW SECTION */}
          <div className="popup-section">
            <h2 className="popup-subtitle">Overview</h2>
            <p>
              This project includes a set of custom productivity tools developed for Obsidian, a markdown-based knowledge platform.
              The goal was to streamline note-taking, task tracking, and time management using intuitive interfaces and simple automation logic.
            </p>
            <p>
              All tools were designed with non-technical users in mind—allowing flexibility without requiring any scripting experience.
              Development was done using JavaScript and packaged with GitHub workflows.
            </p>
          </div>

          {/* FEATURES SECTION */}
          <div className="popup-section">
            <h2 className="popup-subtitle">Features</h2>
            <ul>
              <li><strong>Timer Plugin</strong> — Task timers and countdown overlays within Obsidian notes</li>
              <li><strong>Task Manager</strong> — Queryable task tables with priorities, due dates, and calendar links</li>
              <li><strong>Workflow Templates</strong> — Dynamic template builder with inline variables and repeatable logic</li>
            </ul>
            <div className="popup-image-grid">
              <img src={timerImg} alt="Timer Plugin UI" className="popup-image-solid" />
              <img src={tasksImg} alt="Task Management Plugin" className="popup-image-solid" />
            </div>
          </div>

          {/* RESULTS SECTION */}
          <div className="popup-section">
            <h2 className="popup-subtitle">Results</h2>
            <p>
              These tools are used regularly for coursework and project planning. The plugins simplify otherwise repetitive work, and were built to
              integrate directly into existing workflows without requiring outside apps.
            </p>
            <p>
              As part of this effort, a portfolio website was also created to consolidate project work in one place and experiment with basic frontend design.
            </p>
            <img src={siteImg} alt="Portfolio Site Screenshot" className="popup-image-solid" />
            <p>
              Look familiar? :)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebDevPopup;
