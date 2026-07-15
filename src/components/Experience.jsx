// // src/components/Experience.jsx
// import React from "react";

// const Experience = () => {
//   return (
//     <section className="experience-section">
//       <h2>Work Experience</h2>
//       <div className="experience-card">
//         <h3>
//           Frontend Developer / Freelancer
//           <span className="date">Jan - 2026 - Present</span>
//         </h3>
//         <p className="company">Self-Employed / Project-Based Development</p>

//         <p>
//           Architected and deployed responsive, pixel-perfect web interfaces
//           using React.js (Vite) and SASS blueprinting based on complex user and
//           client specifications.Integrated Google Firebase Suite as a serverless
//           backend layer, implementing real-time data management (onSnapshot),
//           secure user authentication, and persistent dynamic states.Engineered
//           robust dynamic forms using advanced state management, combining Framer
//           Motion for smooth UI/UX animations and clean lifecycle hooks for
//           optimized performance.Managed end-to-end source code pipelines
//           efficiently using Git and GitHub workflows, facilitating continuous
//           integration and smooth production deployment via Vercel.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Experience;

import React from "react";
import { FaBriefcase, FaBuilding, FaCircleCheck } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";

const Experience = () => {
  return (
    <section className="experience-section">
      <h2 className="section-bento-heading">
        <FaBriefcase className="section-title-icon" /> Work Experience
      </h2>

      {/* HIGH-DENSITY EXPERIENCE ASSET CARD */}
      <div className="experience-bento-tile-card">
        {/* HEADER META MATRIX */}
        <div className="tile-upper-header-bar">
          <h3 className="role-title-text">Frontend Developer / Freelancer</h3>
          <span className="timeline-date-badge">
            <FaCalendarAlt /> Jan 2026 - Present
          </span>
        </div>

        <p className="company-branding-subtext">
          <FaBuilding /> Self-Employed / Project-Based Development
        </p>

        {/* 💻 HIGH-DENSITY BULLET POINTS (ඡේදය වෙනුවට කියවන්න ලේසි කරුණු 4ක් කළා) */}
        <ul className="experience-bullet-nodes-stack">
          <li>
            <FaCircleCheck className="bullet-node-check-icon" />
            <span>
              Architected and deployed responsive, pixel-perfect web interfaces
              using React.js (Vite) and SASS blueprinting based on complex user
              and client specifications.
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
