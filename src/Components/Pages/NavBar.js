import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png'; // ✅ Correct
import { Button } from './Button'; // ✅ Added
import './NavBar.css';


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [button, setButton] = useState(true)

  
  const showButton = () => {
    if(window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo} alt="Logo" className="logo-image" />
            JONATHAN PEEK
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/Home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Research' className='nav-links' onClick={closeMobileMenu}>
                Research
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Skills' className='nav-links' onClick={closeMobileMenu}>
                Skills
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/Contact' className='nav-links' onClick={closeMobileMenu}>
                Contact
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>CONTACT</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
