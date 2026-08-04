import React from "react";

import { FaCalendarAlt } from "react-icons/fa";
import { FaBriefcase, FaBuilding, FaCircleCheck } from "react-icons/fa6";

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="section-bento-heading">
        <FaBriefcase className="section-title-icon" /> Work Experience
      </h2>

      <div className="experience-bento-tile-card">
        <div className="tile-upper-header-bar">
          <h3 className="role-title-text">Frontend Developer / Freelancer</h3>
          <span className="timeline-date-badge">
            <FaCalendarAlt /> Jan 2026 - Present
          </span>
        </div>

        <p className="company-branding-subtext">
          <FaBuilding /> Self-Employed / Project-Based Development
        </p>
        <ul className="experience-bullet-nodes-stack">
          <li>
            <FaCircleCheck className="bullet-node-check-icon" />
            <span>
              Architected and deployed responsive, pixel-perfect web interfaces
              using React.js (Vite), TypeScript and TailwindCSS based on complex
              user and client specifications.
            </span>
          </li>
          <li>
            <FaCircleCheck className="bullet-node-check-icon" />
            <span>
              Integrated Google Firebase Suite as a serverless backend layer,
              implementing real-time data management (onSnapshot), secure user
              authentication, and persistent dynamic states.
            </span>
          </li>
          <li>
            <FaCircleCheck className="bullet-node-check-icon" />
            <span>
              Engineered robust dynamic forms using advanced state management,
              combining Framer Motion for smooth UI/UX animations and clean
              lifecycle hooks for optimized performance.
            </span>
          </li>
          <li>
            <FaCircleCheck className="bullet-node-check-icon" />
            <span>
              Managed end-to-end source code pipelines efficiently using Git and
              GitHub workflows, facilitating continuous integration and smooth
              production deployment via Vercel.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
