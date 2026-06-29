// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  // Print Window එක Open කරන Function එක
  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="hero-section">
      <h1>Frontend Developer</h1>
      <h2>Lakshan Sandeepa</h2>
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
        <span>📧 lakshansandeepa0305@gmail.com</span>
        <span>📞 +94 707046840</span>
        <span>📍 Kandy / Sri Lanka</span>

        <hr />
        <span>https://lakshan-sandeepa-dev.vercel.app/</span>
        <span>https://www.linkedin.com/in/lakshan-sandeepa</span>
        <span>https://www.linkedin.com/in/lakshan-sandeepa</span>
      </div>

      {/* මේ බටන් එක ක්ලික් කළ විට වෙබ් පිටුව CV එකක් ලෙස මුද්‍රණය වේ */}
      <button onClick={handlePrint} className="btn-print">
        Print / Save as PDF CV
      </button>
    </section>
  );
};

export default Hero;
