import React from 'react';
import './Home.css';
import VerticalTimeline from './VerticalTimeline';
import myFace from '../../Assets/my_face2.png';
import background from '../../Assets/home_background.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      {/* Profile Section */}
      <div
        className="home-header"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="profile-card">
          <img src={myFace} alt="Jonathan Peek" className="profile-pic" />
          <div className="profile-text">
            <h1>Jonathan Peek</h1>
            <p className="indented">
              Hi, thanks for checking out my portfolio!
            </p>
            <p className="indented">
              I am a second-year Mechanical Engineering student at UC Irvine, aiming to specialize in control systems. My research emphasis is on electromagnetic systems and I am always looking for more opportunities to learn.
            </p>
            <p className="indented">
              If you have any questions while you are here, shoot me a message!
            </p>
          </div>
        </div>
        <div className="fade-overlay" />
      </div>

      {/* Timeline Section */}
      <VerticalTimeline />

      {/* CTA Section */}
      <div className="cta-section">
  <h2>Want to know what else I've been up to?</h2>
  <ul className="cta-buttons">
    <li className="cta-item">
      <Link to="/Projects" className="cta-button">Projects</Link>
    </li>
    <li className="cta-item">
      <Link to="/Resume" className="cta-button">Resume</Link>
    </li>
    <li className="cta-item">
      <Link to="/Contact" className="cta-button">Contact</Link>
    </li>
  </ul>
</div>

    </div>
  );
}

export default Home;
