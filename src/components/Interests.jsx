// src/components/Interests.jsx
import React from "react";

const Interests = () => {
  return (
    <section className="interests-section">
      <h2>Interests & Languages</h2>
      <div className="interests-grid">
        <div className="interest-item">
          <h3>UI/UX Visual Engineering</h3>
          <p>
            Building futuristic, high-density digital layouts and interactive
            designs.
          </p>
        </div>
        <div className="interest-item">
          <h3>Ethical Hacking & Web Security</h3>
          <p>
            Exploring web application security, data anonymity, and compliance
            protections.
          </p>
        </div>
        <div className="interest-item">
          <h3>Strategic Chess</h3>
          <p>
            Algorithmic problem solving, critical thinking, and pattern
            recognition.
          </p>
        </div>
        <div className="interest-item">
          <h3>Languages</h3>
          <p>Sinhala (Native) </p>

          <p>Englsih (Professional Working Proficiency)</p>
        </div>
      </div>
    </section>
  );
};

export default Interests;
