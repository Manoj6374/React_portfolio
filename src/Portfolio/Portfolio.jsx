import React, {  useState } from 'react';
import './Portfolio.css'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

import { Projects } from "./Projects";
import { Nav } from "./Nav";
import { Skills } from "./Skills";

import logo from '../assets/logo_trial.png'

import { TiSocialLinkedin } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { ContactForm } from './ContactForm';



export const Portfolio = () => {

  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

 
  const openSideNav = () => {
    setIsSideNavOpen(true);
  };

  const closeSideNav = () => {
    setIsSideNavOpen(false);
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
  
      <nav>
      <a href="#home"> </a>
        <div className="nav-logo">
          
            <img src={logo} alt="Logo" />
         
        </div>
        <ul className="nav-links">
          <li className="link">
            <a onClick={() => scrollToSection('home')}>Home</a>
          </li>

          <li className="link">
            <a onClick={() => scrollToSection('skills')}>Skills</a>
          </li>
          <li className="link">
            <a onClick={() => scrollToSection('projects')}>Projects</a>
          </li>
          <li className="link">
            <a onClick={() => scrollToSection('contact')}>Contact</a>
          </li>
        </ul>
        
        <button className="btn hire" onClick={()=>scrollToSection('contact')}>Hire Me </button>

        <div className="burger-menu" onClick={openSideNav}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      </nav>

      <div id="side-nav"  className={isSideNavOpen ? 'open' : ''}>
        <ul className="sidenav-links">
          <li className="link">
            <a onClick={() => { closeSideNav(); scrollToSection('home'); }}>Home</a>
          </li>
          <li className="link">
            <a onClick={() => { closeSideNav(); scrollToSection('skills'); }}>Skills</a>
          </li>
          <li className="link">
            <a onClick={() => { closeSideNav(); scrollToSection('projects'); }}>Projects</a>
          </li>
          <li className="link">
            <a onClick={() => { closeSideNav(); scrollToSection('contact'); }}>Contact</a>
          </li>
        </ul>
        <div>
          <span id="cancel" onClick={closeSideNav}>
            X
          </span>
        </div>
      </div>
      <header className="container" id="home">
        <Nav/>
      </header>

      <div className="skills" id="skills" >
        
        <Skills/>
      </div>
    
    
      <div className="container" id="projects">
        
        <Projects/>
      </div>

      <section className="contact-container" id="contact">
        <h2 className="header">CONTACT</h2>
        <div>
          
<ContactForm/>

          <div className="icon">

<p ><a className="linkedin"  href="https://www.linkedin.com/in/manojn24" target='_blank'><TiSocialLinkedin /></a></p>
<p ><a className="instagram" href="https://www.instagram.com/m_r_m_a_n_o_j_24?igsh=MW12aXAzMjgxaTVjNA=="> <FaInstagram /> </a></p>
<p ><a className="facebook"  href="(+91 6374003745)"><i className="fa-brands fa-facebook"></i><TiSocialFacebook /></a></p>
<p ><a className="twitter"   href="#"><i className="fa-brands fa-twitter"></i> <TiSocialTwitter /> </a></p>
<p ><a className="whatsapp"  href="#
"><i className="fa-brands fa-whatsapp"></i> <FaWhatsapp /></a></p>

</div>
        </div>
      </section>
    </>
  );

};
AOS.init();

