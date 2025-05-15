import React, { useState, useEffect } from 'react';
import './Projects.css';

import AutoCADPopup from './autocad';
import MHDQuadPopup from './mhdquad';
import MHDThrusterPopup from './mhdthruster';
import WebDevPopup from './webdev';

const projects = [
  {
    title: 'MagnetoHydroDynamic Quadcopter',
    image: require('../../Assets/mhd_quad.png'),
    description: 'Explored practical applications of magnetohydrodynamic thrusters.',
  },
  {
    title: 'Millimeter Scale MHD Thruster',
    image: require('../../Assets/mhd_thruster.png'),
    description: 'Radial redesign for enhanced microscale thrust (v2 now in testing).',
  },
  {
    title: 'Plugin and Web Development',
    image: require('../../Assets/dev_plugins.png'),
    description: 'Plugins and web development for personal use cases.',
  },
  {
    title: 'AutoCAD Residential Design',
    image: require('../../Assets/autocad_house.png'),
    description: 'Architectural design layouts rendered in AutoCAD for client proposals.',
  }
];

const experience = [
  {
    title: 'Cuervo Lab',
    image: require('../../Assets/cuervolab_logo.png'),
    description: 'Undergraduate Researcher (2024 – Present)',
    roles: 'Solidworks Design and Modeling, Fabriction including 3D printing and circuitry, lab testing of MHD thruster prototypes and reading/writing research literature.',
    accomplishments: 'Developed successeful quadcopter frame for surface-level MHD thruster functionality. Developed a working radial MHD thruster prototype. Reduced weight over prior lab designs.',
    takeaways: 'If the research is difficult, it means you are researching the correct problem!',
  },
  {
    title: 'Frontier CE',
    image: require('../../Assets/frontierlogoblack.png'),
    description: 'Mechanical Engineering Intern (Summer 2024)',
    roles: 'Client/site visits, energy calculations, regulation checks, drafting MEP designs and putting together and delivering completed design proposals.',
    accomplishments: 'Succesfully completed design projects ranging from schools, restaurants, and hospitals, per both client and government specifications.',
    takeaways: 'Efficacy in work is not a matter of brute force, but prioritization and communication with your team.'
  },
  {
    title: 'New West Medical',
    image: require('../../Assets/newwest_logo.png'),
    description: 'Administrative Assistant (2023)',
    roles: 'Handled prescriptions with doctors offices, managed paperwork and tracked medical device orders.',
    accomplishments: 'Completed mass record reorganization, provided hundreds of patients with care per week through CMNs and prescription renewals.',
    takeaways: 'Always prioritize understanding where you lay in a workflow to be more useful to it.',
  }
];

function Projects() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (index) => {
    setActiveModal(index);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  useEffect(() => {
    document.body.style.overflow = activeModal !== null ? 'hidden' : 'auto';
  }, [activeModal]);

  return (
    <div className="projects-background">
      <div className="projects-wrapper">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} className="project-card-image" />
              <div className="project-card-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <button className="project-card-link" onClick={() => openModal(index)}>Read More</button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="section-title">Experience</h2>
        <div className="projects-grid">
          {experience.map((role, index) => (
            <div className="project-card" key={`exp-${index}`}>
              <img src={role.image} alt={role.title} className="project-card-image" />
              <div className="project-card-body">
                <h3>{role.title}</h3>
                <p>{role.description}</p>
                <button className="project-card-link" onClick={() => openModal(projects.length + index)}>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PROJECT MODALS */}
      {activeModal !== null && projects[activeModal]?.title === 'AutoCAD Residential Design' && (
        <AutoCADPopup title={projects[activeModal].title} onClose={closeModal} />
      )}
      {activeModal !== null && projects[activeModal]?.title === 'MagnetoHydroDynamic Quadcopter' && (
        <MHDQuadPopup title={projects[activeModal].title} onClose={closeModal} />
      )}
      {activeModal !== null && projects[activeModal]?.title === 'Millimeter Scale MHD Thruster' && (
        <MHDThrusterPopup title={projects[activeModal].title} onClose={closeModal} />
      )}
      {activeModal !== null && projects[activeModal]?.title === 'Plugin and Web Development' && (
        <WebDevPopup title={projects[activeModal].title} onClose={closeModal} />
      )}

      {/* EXPERIENCE MODALS */}
      {activeModal !== null && activeModal >= projects.length && (() => {
        const expIndex = activeModal - projects.length;
        const exp = experience[expIndex];
        return (
          <div className="project-modal-overlay" onClick={closeModal}>
            <div className="project-popup-card-solid" onClick={(e) => e.stopPropagation()}>
              <span className="popup-close" onClick={closeModal}>&times;</span>
              <div className="popup-scrollable-content">
                <div className="popup-section">
                  <h1 className="popup-title-solid">{exp.title}</h1>
                  <p className="popup-role-subtitle">{exp.description}</p>
                  <div className="popup-grid-solid">
                    <div className="popup-left-solid">
                      <p><span className="popup-label">Roles / Responsibilities:</span> {exp.roles}</p>
                      <p><span className="popup-label">Accomplishments:</span> {exp.accomplishments}</p>
                      <p><span className="popup-label">Biggest Takeaways:</span> {exp.takeaways}</p>
                    </div>
                    <div className="popup-right-solid">
                      <img src={exp.image} alt={exp.title} className="popup-image-solid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

export default Projects;
