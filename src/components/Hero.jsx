import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGlobe,
  FaLinkedin,
  FaGithub,
  FaArrowDown,
  FaPrint,
} from "react-icons/fa";

const Hero = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="hero-section">
      <h1 className="developer-main-name">Lakshan Sandeepa</h1>
      <h2 className="developer-core-role">Frontend Developer</h2>
      <p className="title">UI/UX Visual Engineering & Security Enthusiast</p>

      <div className="contact-info-grid-node">
        <div className="contact-links-stack">
          <a
            href="mailto:lakshansandeepa0305@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="contact-item-anchor">
            <FaEnvelope className="hud-meta-icon" />
            lakshansandeepa0305@gmail.com
          </a>
          <a href="tel:+94 707046840" className="contact-item-anchor">
            <FaPhone className="hud-meta-icon" /> +94 707046840
          </a>
          <span className="contact-item-static">
            <FaMapMarkerAlt className="hud-meta-icon" /> Kandy / Sri Lanka
          </span>
        </div>

        <div className="social-links-stack">
          <a
            href="https://lakshan-sandeepa-dev.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="social-item-anchor link-portfolio">
            <FaGlobe className="hud-meta-icon" /> Portfolio
          </a>
          <a
            href="https://www.linkedin.com/in/lakshan-sandeepa"
            target="_blank"
            rel="noreferrer"
            className="social-item-anchor link-linkedin">
            <FaLinkedin className="hud-meta-icon" /> Linkedin Profile
          </a>
          <a
            href="https://github.com/lakshan-beast"
            target="_blank"
            rel="noreferrer"
            className="social-item-anchor link-github">
            <FaGithub className="hud-meta-icon" /> Github Profile
          </a>
        </div>
      </div>

      <button onClick={handlePrint} className="btn-print">
        <FaPrint /> Print / Save as PDF CV
      </button>
      {/* </div> */}

      <div className="profile-summary-bento-card">
        <h3 className="summary-section-heading">Executive Core Summary</h3>
        <p className="summary">
          Results-driven and highly autonomous Frontend Developer with a proven
          track record of engineering scalable web applications and
          high-performance SaaS ecosystems. Recognized for exceptional
          self-learning abilities and an analytical approach to complex
          technical problem-solving. Proficient in React.js, Typescript and TailwindCSS
          blueprinting, with extensive hands-on experience integrating
          serverless cloud layers (Firebase) to stream real-time data components
          with zero-latency reflection. Passionate about clean code
          architecture, reusable UI design systems, and converting intricate
          operational workflows into responsive, interactive user experiences.
        </p>
      </div>
    </section>
  );
};

export default Hero;
