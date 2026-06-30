// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  // Print Window එක Open කරන Function එක
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="hero-section">
      <h1>Lakshan Sandeepa</h1>
      <h2>Frontend Developer</h2>
      <p className="title">UI/UX Visual Engineering & Security Enthusiast</p>

      <p className="summary">
        Results-driven and highly autonomous Frontend Developer with a proven
        track record of engineering scalable web applications and
        high-performance SaaS ecosystems. Recognized for exceptional
        self-learning abilities and an analytical approach to complex technical
        problem-solving. Proficient in React.js and SASS blueprinting, with
        extensive hands-on experience integrating serverless cloud layers
        (Firebase) to stream real-time data components with zero-latency
        reflection. Passionate about clean code architecture, reusable UI design
        systems, and converting intricate operational workflows into responsive,
        interactive user experiences.
      </p>

      <div className="contact-info">
        <div className="contact-links">
          <a
            href="mailto:lakshansandeepa0305@gmail.com"
            target="_blank"
            rel="noreferrer">
            lakshansandeepa0305@gmail.com
          </a>
          <a href="tel:+94 707046840">+94 707046840</a>
          <span>Kandy / Sri Lanka</span>
        </div>

        <div className="socail-links">
          <a
            href="https://lakshan-sandeepa-dev.vercel.app/"
            target="_blank"
            rel="noreferrer">
            Portofolio
          </a>
          <a
            href="https://www.linkedin.com/in/lakshan-sandeepa"
            target="_blank"
            rel="noreferrer">
            Linkedin Profile
          </a>
          <a
            href="https://github.com/lakshan-beast"
            target="_blank"
            rel="noreferrer">
            Github Profile
          </a>

          <a href=""></a>
        </div>
      </div>

      <button onClick={handlePrint} className="btn-print">
        Print / Save as PDF CV
      </button>
    </section>
  );
};

export default Hero;
