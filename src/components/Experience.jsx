// src/components/Experience.jsx
import React from "react";

const Experience = () => {
  return (
    <section className="experience-section">
      <h2>Work Experience</h2>
      <div className="experience-card">
        <h3>
          Frontend Developer / Freelancer
          <span className="date">Jan - 2026 - Present</span>
        </h3>
        <p className="company">Self-Employed / Project-Based Development</p>

        <p>
          Architected and deployed responsive, pixel-perfect web interfaces
          using React.js (Vite) and SASS blueprinting based on complex user and
          client specifications.Integrated Google Firebase Suite as a serverless
          backend layer, implementing real-time data management (onSnapshot),
          secure user authentication, and persistent dynamic states.Engineered
          robust dynamic forms using advanced state management, combining Framer
          Motion for smooth UI/UX animations and clean lifecycle hooks for
          optimized performance.Managed end-to-end source code pipelines
          efficiently using Git and GitHub workflows, facilitating continuous
          integration and smooth production deployment via Vercel.
        </p>
      </div>
    </section>
  );
};

export default Experience;
