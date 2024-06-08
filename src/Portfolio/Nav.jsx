import React from 'react';
import profileImage from '../assets/IMG_1191.png'; 
import resume from '../assets/ManojResume.pdf';

import { FaShare } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";


export const Nav = () => {
    const handleDownload = () => {

        const url = {resume};
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'ManojResume.pdf');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };

    return (
        <>
            <div className="content">
                <span className="blur"></span>
                <span className="blur"></span>
                <h4>CREATE YOUR SITE LIKE A PRO</h4>
                <h1>
                    Hi, I am <span>Manoj</span>
                </h1>
                <h1 className="webdev">Web developer</h1>
                <p>
                    Welcome to my portfolio! Inside, you will discover a handpicked
                    showcase of projects that embody my love for elegant design, smooth
                    user experience, and cutting-edge tech. From corporate sites to
                    interactive apps and dazzling e-commerce platforms, I have got it all
                    covered.
                </p>
                <div className="btns" >
                    <button className="btn get" onClick={()=>scrollToSection('contact')}>
                        Get started <FaShare />
                    </button>
                    <button className="btn"  onClick={handleDownload}>
                        Download Resume <FaDownload />
                    </button>
                </div>
            </div>
            <div className="image">
                <img src={profileImage} alt="Manoj's Profile" /> 
            </div>
        </>
    );
};
