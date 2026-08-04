import React from "react";

import {
  FaCompass,
  FaShieldHalved,
  FaChessKnight,
  FaLanguage,
  FaCircleCheck,
} from "react-icons/fa6";

const Interests = () => {
  return (
    <section className="interests-section">
      <h2 className="section-bento-title">
        <FaCompass className="section-title-icon" /> Interests & Languages
      </h2>

      <div className="interests-grid">
        <div className="interest-item-card">
          <h3>
            <FaCompass className="node-inline-icon icon-teal" /> UI/UX Visual
            Engineering
          </h3>
          <p>
            Building futuristic, high-density digital layouts and interactive
            designs.
          </p>
        </div>

        <div className="interest-item-card">
          <h3>
            <FaShieldHalved className="node-inline-icon icon-red" /> Ethical
            Hacking & Web Security
          </h3>
          <p>
            Exploring web application security, data anonymity, and compliance
            protections.
          </p>
        </div>

        <div className="interest-item-card">
          <h3>
            <FaChessKnight className="node-inline-icon icon-gold" /> Strategic
            Chess
          </h3>
          <p>
            Algorithmic problem solving, critical thinking, and pattern
            recognition.
          </p>
        </div>

        <div className="interest-item-card languages-multi-node-card">
          <h3>
            <FaLanguage className="node-inline-icon icon-blue" /> Languages
          </h3>
          <div className="languages-capsules-stack">
            <p className="lang-row-node">
              <FaCircleCheck className="lang-check" />
              <span>Sinhala (Native)</span>
            </p>
            <p className="lang-row-node">
              <FaCircleCheck className="lang-check" />
              <span>English (Professional Working Proficiency)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
