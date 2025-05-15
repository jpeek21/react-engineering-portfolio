import React, { useEffect, useState, useRef } from 'react';
import './VerticalTimeline.css';
import soccerPicture from '../../Assets/beginning.png';
import autoCADDrawing from '../../Assets/autocad_house.png';
import hospitalPicture from '../../Assets/hospitalPic.png';
import workingOnCar from '../../Assets/foundClub.png';
import NewWestLogo from '../../Assets/newwest_logo.png';
import uciLogo from '../../Assets/gradPic.png';
import zotBoticsLogo from '../../Assets/zotBotics.png';
import frontierLogo from '../../Assets/frontier_logo.png';
import cuervoLabLogo from '../../Assets/cuervolab_logo.png';
import quadCopter from '../../Assets/mhd_quad.png';
import mhdThruster from '../../Assets/mhd_thruster.png';

const events = [
  { date: 'August 2019', year: '2019', img: soccerPicture, desc: 'Before highschool, before engineering, before the Navier-Stokes equation. All I knew was piano and soccer' },
  { date: 'Jan 2022', year: '2022', img: autoCADDrawing, desc: 'After talking more with my grandpa, I decide I wanted to follow him in architecture, and would practice designs in AutoCAD' },
  { date: 'Mar 2022', year: '2022', img: hospitalPicture, desc: 'I then sustained a permanent injury that pushed my engineering interest to the biomedical field' },
  { date: 'Nov 2022', year: '2022', img: workingOnCar, desc: 'During recovery, when not in math competitions, my passion was my club that allowed me to teach mechanical skills' },
  { date: 'Apr 2023', year: '2023', img: NewWestLogo, desc: 'I soon began work at New West to learn more about the medical supply industry' },
  { date: 'Sep 2023', year: '2023', img: uciLogo, desc: 'Graduated then headed UC Irvine to study Engineering!' },
  { date: '2024', year: '2024', img: zotBoticsLogo, desc: 'Joined Zotbotics, piqueing my interest in mechatronics in mechanical engineering' },
  { date: 'Summer 2024', year: '2024', img: frontierLogo, desc: 'Interned at Frontier Consulting Engineers.' },
  { date: 'Dec 2024', year: '2024', img: cuervoLabLogo, desc: 'Became undergraduate researcher at the Cuervo Lab to learn about medical applications of robotics' },
  { date: 'Apr 2025', year: '2025', img: quadCopter, desc: 'First research report on applications of Magnetohydrodynamic actuation at the Cuervo Lab.' },
  { date: 'May 2025', year: '2025', img: mhdThruster, desc: 'Developed and tested a radial MHD thruster prototype.' },
];

export default function VerticalTimeline() {
  const [activeYear, setActiveYear] = useState(events[0].year);
  const [timelineStarted, setTimelineStarted] = useState(false);
  const timelineRefs = useRef([]);
  const timelineStartRef = useRef(null);

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;

    // Ensure background year is always shown
    setTimelineStarted(true);

    let closestIndex = 0;
    let minDistance = Infinity;

    for (let i = 0; i < timelineRefs.current.length; i++) {
      const ref = timelineRefs.current[i];
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          closestIndex = i;
          minDistance = distance;
        }
      }
    }

    setActiveYear(events[closestIndex].year);
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // 🔁 force trigger on load

  return () => window.removeEventListener('scroll', handleScroll);
}, []);






  return (
    <div className="timeline-container" ref={timelineStartRef}>
      {timelineStarted && (
        <div className="timeline-background-year">{activeYear}</div>
      )}
      <div className="timeline-spacer" />
      <div className="about-pointer bounce">About Me ↓</div>
      <div className="timeline-line" />
      <div className="timeline-dot cap-dot" />

      {events.map((event, index) => (
        <div
          key={index}
          className="timeline-row"
          ref={(el) => (timelineRefs.current[index] = el)}
        >
          {index % 2 === 0 ? (
            <>
              <div className="timeline-card left-card">
                <img src={event.img} alt={event.date} />
                <div className="timeline-content">
                  <h3>{event.date}</h3>
                  <p>{event.desc}</p>
                </div>
              </div>
              <div className="timeline-connector">
                <div className="connector-line" />
                <div className="timeline-dot" />
                <div className="timeline-year">{event.year}</div>
              </div>
            </>
          ) : (
            <>
              <div className="timeline-connector">
                <div className="connector-line" />
                <div className="timeline-dot" />
                <div className="timeline-year">{event.year}</div>
              </div>
              <div className="timeline-card right-card">
                <img src={event.img} alt={event.date} />
                <div className="timeline-content">
                  <h3>{event.date}</h3>
                  <p>{event.desc}</p>
                </div>
              </div>
            </>
          )}
        </div>
      ))}

      <div className="timeline-final">
        <div className="timeline-dot" />
        <div className="timeline-card center">
          <div className="timeline-content">
            <h3>Maybe You :)</h3>
            <p>I'm always up for an opportunity to learn!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
