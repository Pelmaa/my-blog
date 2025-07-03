// src/components/Footer.jsx
import React from "react";
import { MdEmail } from "react-icons/md";
import { SiX } from "react-icons/si";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "../App.css"; // Adjust if using a separate CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

<div className="footer-about">
  <h3>About This Blog</h3>
  <p>
    This blog chronicles my journey as a web developer, sharing insights, challenges, and lessons learned along the way. 
    From beginner projects to advanced techniques, I aim to inspire and support fellow developers while documenting my continuous growth in the tech world.
  </p>
</div>


        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="https://pelmaa.netlify.app" target="_blank" rel="noopener noreferrer">Portfolio Website</a></li>
            <li><a href="https://trackyourmovie.netlify.app" target="_blank" rel="noopener noreferrer">WatchBuddy</a></li>
            <li><a href="https://pechu-quiz.netlify.app" target="_blank" rel="noopener noreferrer">Quiz App</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <ul className="contact-list">
            <li>
              <a href="mailto:pewangk703@gmail.com" className="icon-link">
                <MdEmail size={20} /> pewangk703@gmail.com
              </a>
            </li>
            <li>
              <a href="https://twitter.com/pewangk703" target="_blank" rel="noopener noreferrer" className="icon-link">
                <SiX size={20} /> @pewangk703
              </a>
            </li>
            <li>
              <a href="https://github.com/Pelmaa" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaGithub size={20} /> github.com/Pelmaa
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/Pema_Wangchuk" target="_blank" rel="noopener noreferrer" className="icon-link">
                <FaLinkedin size={20} /> linkedin.com/in/Pema_Wangchuk
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>©️ {new Date().getFullYear()} Pema Wangchuk. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
