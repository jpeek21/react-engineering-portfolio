// autocad.js
import React from 'react';
import './autocad.css';

// Replace with actual images when ready
import sitePlanImg from '../../Assets/autocad_siteplan.png';
import floorPlanImg from '../../Assets/autocad_floorplan.png';
import elevationImg from '../../Assets/autocad_elevations.png';
import scheduleImg from '../../Assets/autocad_schedule.png';

function AutoCADPopup({ title, onClose }) {
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
                <p><span className="popup-label">Role:</span> Student Designer, ENGR 29 at Shasta College</p>
                <p><span className="popup-label">Date:</span> Spring 2022</p>
                <p><span className="popup-label">Instructor:</span> Professor Wade</p>
                <p><span className="popup-label">Skills:</span> AutoCAD, Hand-Drafting, Architectural Design, Site Plan Compiling</p>
              </div>
              <div className="popup-right-solid">
                <img src={sitePlanImg} alt="Site Plan" className="popup-image-solid" />
              </div>
            </div>
          </div>

          {/* GOAL SECTION */}
          <div className="popup-section">
            <h2 className="popup-subtitle">Goal</h2>
            <p>
              The goal was to develop a mock-residential layout with full architectural standards. This included:
            </p>
            <ul>
              <li>East Asian architectural style with curved roofing</li>
              <li>Over 2500 square feet across three floors</li>
              <li>Ample natural lighting and windows in all key rooms</li>
              <li>Private backyard patio and an interior fountain</li>
              <li>Garage with an integrated loft space</li>
            </ul>
          </div>

          {/* METHODS SECTION */}
          <div className="popup-section">
            <h2 className="popup-subtitle">Methods</h2>
            <p>
              I began with conceptual sketches and hand-drafting, later transitioning to AutoCAD for final drawings.
              The architectural packet included detailed site plans, multiple floor plans, elevation views, and door/window schedules.
              A major design challenge was integrating curved roofing and lighting across all levels while maintaining functional square footage.
            </p>
            <div className="popup-image-grid">
              <img src={floorPlanImg} alt="Floor Plan" className="popup-image-solid" />
              <img src={scheduleImg} alt="Window and Door Schedule" className="popup-image-solid" />
            </div>
          </div>

          {/* RESULTS SECTION */}
          <div className="popup-section">
            <h2 className="popup-subtitle">Results</h2>
            <p>
              The final deliverable was a professional, multi-sheet architectural packet that could be presented to a client. It showcased:
            </p>
            <ul>
              <li>A complete 3-story East Asian inspired mansion with radially curved roof features</li>
              <li>Natural light design and outdoor living integration</li>
              <li>Logical room organization across levels</li>
              <li>Detailed floor plans, site context, and formal elevations</li>
            </ul>
            <img src={elevationImg} alt="Elevation Views" className="popup-image-solid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutoCADPopup;
