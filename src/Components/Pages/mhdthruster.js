// mhdthruster.js
import React from 'react';
import './mhdthruster.css';

import theoryImg from '../../Assets/radial_theory.png';
import v1Img from '../../Assets/radial_v1_scrapped.png';
import v2cadImg from '../../Assets/radial_v2_cad.png';
import v2comparisonImg from '../../Assets/radial_v2_vs_v1.png';

function MHDThrusterPopup({ title, onClose }) {
  return (
    <div className="project-modal-overlay" onClick={onClose}>
      <div className="project-popup-card-solid" onClick={(e) => e.stopPropagation()}>
        <span className="popup-close" onClick={onClose}>&times;</span>

        <div className="popup-scrollable-content">
          {/* INTRODUCTION */}
          <div className="popup-section">
            <h1 className="popup-title-solid">{title} <span style={{ fontSize: '1rem', color: '#0073e6' }}>(In Progress)</span></h1>
            <div className="popup-grid-solid">
              <div className="popup-left-solid">
                <p><span className="popup-label">Role:</span> Undergraduate Researcher, Magnetic Microsystems and Microrobotics Lab</p>
                <p><span className="popup-label">Date:</span> Spring 2025</p>
                <p><span className="popup-label">Advisor:</span> Professor Camilo Velez-Cuervo</p>
                <p><span className="popup-label">Skills:</span> SolidWorks, 3D Printing, Design for Manufacturing, Magnetohydrodynamics</p>
              </div>
              <div className="popup-right-solid">
                <img src={theoryImg} alt="Radial MHD Theory Diagram" className="popup-image-solid" />
              </div>
            </div>
          </div>

          {/* GOAL SECTION */}
          <div className="popup-section">
            <h2 className="popup-subtitle">Goal</h2>
            <p>
              This project seeks to improve the efficiency of small-scale MHD thrusters by exploring a radial current configuration.
              Traditional linear MHD designs are limited by inefficient current paths and weak Lorentz vectors.
              The radial design aims to maximize force by arranging magnets to produce a magnetic field perpendicular to current lines radiating from a central cathode.
            </p>
            <p>
              The six-fold design allows each magnet to power a larger surface area, theoretically increasing thrust while reducing weight.
            </p>
          </div>

          {/* METHODS SECTION */}
          <div className="popup-section">
            <h2 className="popup-subtitle">Methods</h2>
            <p>
              The first radial prototype (v1) was designed with theoretical accuracy in mind but was ultimately scrapped due to excessive manufacturing complexity.
              Interference between internal pathways and narrow electrode spacing made reliable fabrication unfeasible.
            </p>
            <img src={v1Img} alt="v1 Design Scrapped" className="popup-image-solid" />

            <p>
              Version 2 (v2) was redesigned in SolidWorks with simplified geometry, standardized bore alignment, and a focus on 3D-printability.
              The new design includes magnet sockets, center-pin support, and removable outer ring for easy testing.
            </p>
            <img src={v2cadImg} alt="v2 CAD Model" className="popup-image-solid" />
          </div>

          {/* RESULTS SECTION */}
          <div className="popup-section">
            <h2 className="popup-subtitle">Early Results</h2>
            <p>
              The v2 radial thruster was printed and assembled, then compared to a previous generation non-radial MHD design.
              Although full propulsion tests are still pending, the v2 unit offers a 57% weight reduction and far greater bore exposure for jet formation.
            </p>
            <img src={v2comparisonImg} alt="v2 vs Previous MHD Design" className="popup-image-solid" />
            <p>
              Next steps include inserting test electrodes, capturing saline jet formation under voltage, and comparing performance metrics.
              The design shows strong promise for future lightweight locomotion applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MHDThrusterPopup;
