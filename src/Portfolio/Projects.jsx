import React from "react";

import { MdSportsCricket } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import Ecommerce from '../assets/WhatsApp Image 2024-05-27 at 7.36.01 PM.jpeg';
import rcb from '../assets/IMG_20240531_184954.jpg'



export const Projects = () => {
  return (
    <div className="container-pro">
      <h2 className="header"> MY PROJECTS</h2>
      <div className="features">
        {/* <div className="card">
          <span>
            <i className="fa-solid fa-check-to-slot"></i>
          </span>
          <h4>Online Voting System</h4>
          <p>
            An online voting system web application designed to facilitate
            secure and accessible voting processes for elections, surveys, and
            organizational decision-making.
          </p>
          <a href="#" aria-label="View Online Voting System">
            View <i className="fa-solid fa-eye-slash"></i>
          </a>
        </div> */}
        <div className="card">
          <span>
          <FaShoppingCart />          
          </span>
          <h4>E-Commerce</h4>
        <img src={Ecommerce} alt="" />
          <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      </ul>
          
          <a
            href="https://mmart-60028269846.development.catalystserverless.in/app/index.html"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View E-Commerce Website"
          >
            View <FaEye />
          </a>
        </div>
        <div className="card">
          <span>
          <MdSportsCricket /> 
          </span>
          <h4>RCB Fan Page</h4>
          <img src={rcb} alt="" />
          <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      </ul>
          <a href="https://rcbfanpage.netlify.app/" aria-label="RCB">
            View <FaEye />
          </a>
        </div>
      </div>
    </div>
  );
};
