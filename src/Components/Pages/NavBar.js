import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import { Button } from './Button';
import './NavBar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const location = useLocation();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    setButton(window.innerWidth > 960);
  };

  useEffect(() => {
    showButton();
    window.addEventListener('resize', showButton);
    return () => window.removeEventListener('resize', showButton);
  }, []);

  const getLinkClass = (path) =>
    location.pathname === path ? 'nav-links nav-links-active' : 'nav-links';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src={logo} alt="Logo" className="logo-image" />
        </Link>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to="/" className={getLinkClass('/')} onClick={closeMobileMenu}>Home</Link>
          </li>
          <li className='nav-item'>
            <Link to='/Projects' className={getLinkClass('/Projects')} onClick={closeMobileMenu}>Projects</Link>
          </li>
          <li className='nav-item'>
            <Link to='/Resume' className={getLinkClass('/Resume')} onClick={closeMobileMenu}>Resume</Link>
          </li>
        </ul>

        {button && (
          <Link to="/Contact">
            <Button
              buttonStyle={location.pathname === '/Contact' ? 'btn--primary' : 'btn--outline'}
            >
              CONTACT
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
