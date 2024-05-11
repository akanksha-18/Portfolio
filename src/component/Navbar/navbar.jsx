import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/icon.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png';
import resumePdf from '../../assets/Akanksha_Resume.pdf';
import { animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const scrollToResume = () => {
    scroll.scrollToBottom();
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="" className="logo" />
      <div className="desktopMenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-60} duration={500} className="desktopMenuListItem">Projects</Link>
        <Link activeClass="active" to="certificate" spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuListItem">Certificate</Link>
        <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="desktopMenuListItem" onClick={scrollToResume}>Resume</a>
      </div>
      <button className="desktopMenuBtn" onClick={() => {
        document.getElementById('contact').scrollIntoView();
      }}>
        <img src={contactImg} alt="Contact" className="desktopMenuImg" /> Contact Me
      </button>
      <img src={menu} alt="" className="mobMenu" onClick={() => { setShowMenu(!showMenu) }} />
      <div className="navMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={() => { setShowMenu(false) }}>Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => { setShowMenu(false) }}>About</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={20} duration={500} className="listItem" onClick={() => { setShowMenu(false) }}>Projects</Link>
        <Link activeClass="active" to="certificate" spy={true} smooth={true} offset={70} duration={500} className="listItem" onClick={() => { setShowMenu(false) }}>Certificate</Link>
        <a href={resumePdf} target="_blank" rel="noopener noreferrer" className="desktopMenuListItem" onClick={scrollToResume}>Resume</a>
        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => { setShowMenu(false) }}>Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
