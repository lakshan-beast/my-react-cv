// // // src/components/SkillsAndEdu.jsx
// // import React from "react";

// // const SkillsAndEdu = () => {
// //   return (
// //     <div className="info-grid">
// //       {/* 1. SKILLS SECTION */}
// //       <section className="skills-section">
// //         <h2>Skills</h2>

// //         <div className="skills-group">
// //           <h3>Core Frontend</h3>
// //           <div className="skills-tags">
// //             <span>React.js</span>
// //             <span>SASS / SCSS</span>
// //             <span>JavaScript (ES6+)</span>
// //             <span>HTML5 & CSS3</span>
// //             <span>Responsive Blueprinting</span>
// //             <span>Next.js</span>
// //           </div>
// //         </div>

// //         <div className="skills-group">
// //           <h3>Expertise & Logic</h3>
// //           <div className="skills-tags">
// //             <span>UI/UX Visual Engineering</span>
// //             <span>Algorithmic Problem Solving</span>
// //             <span>Fuzzy Search Algorithms</span>
// //             <span>Web App Security</span>
// //             <span>State Management</span>
// //           </div>
// //         </div>
// //       </section>

// //       {/* 2. EDUCATION & CERTIFICATIONS SECTION */}
// //       <section className="education-section">
// //         <h2>Education & Credentials</h2>

// //         <div className="edu-item">
// //           <h3>G.C.E. Advanced Level (A/L)</h3>
// //           <p className="school">Teldeniya National School</p>
// //           <p className="year">2020 – 2023</p>
// //         </div>

// //         <div className="edu-item">
// //           <h3>G.C.E. Ordinary Level (O/L)</h3>
// //           <p className="school">Teldeniya National School</p>
// //           <p className="year">2017 – 2019</p>
// //         </div>

// //         <div className="edu-item">
// //           <h3>Certifications (In Progress)</h3>
// //           <p className="school">
// //             Google Professional Cybersecurity (via Coursera)
// //           </p>
// //           <p className="school">
// //             Microsoft Certified: Azure Fundamentals (AZ-900)
// //           </p>
// //           <p className="year">Expected 2026</p>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default SkillsAndEdu;

// import React from "react";

// const SkillsAndEdu = () => {
//   return (
//     <div className="info-grid">
//       {/* 1. PROFESSIONAL SKILLS SECTION */}
//       <section className="skills-section">
//         <h2>Professional Technical Skills</h2>

//         <div className="skills-group">
//           <h3>Frontend Architecture</h3>
//           <div className="skills-tags">
//             <span>React.js</span>
//             <span>SASS / SCSS Blueprinting</span>
//             <span>JavaScript (ES6+)</span>
//             <span>HTML5 & CSS3</span>
//             <span>Responsive Web Design</span>
//             <span>UI/UX Visual Engineering</span>
//           </div>
//         </div>

//         <div className="skills-group">
//           <h3>Backend & Cloud Utilities</h3>
//           <div className="skills-tags">
//             <span>Firebase Firestore</span>
//             <span>EmailJS Integration</span>
//             <span>Web App Security Layering</span>
//             <span>Data Anonymity Arrays</span>
//           </div>
//         </div>

//         <div className="skills-group">
//           <h3>Engineering Tools & Platforms</h3>
//           <div className="skills-tags">
//             <span>Vercel</span>
//             <span>Netlify</span>
//             <span>VS Code</span>
//             <span>Chrome DevTools</span>
//             <span>npm (Node Package Manager)</span>
//             <span>Git / GitHub</span>
//           </div>
//         </div>

//         <div className="skills-group">
//           <h3>AI & Workflow Optimization</h3>
//           <div className="skills-tags">
//             <span>Cursor AI</span>
//             <span>Claude AI Assisted Coding</span>
//             <span>Algorithmic Problem Solving</span>
//           </div>
//         </div>
//       </section>

//       {/* 2. EDUCATION & CERTIFICATIONS SECTION */}
//       <section className="education-section">
//         <h2>Education & Credentials</h2>

//         <div className="edu-item">
//           <h3>G.C.E. Advanced Level (A/L)</h3>
//           <p className="school">Teldeniya National School</p>
//           <p className="year">2020 – 2023</p>
//         </div>

//         <div className="edu-item">
//           <h3>G.C.E. Ordinary Level (O/L)</h3>
//           <p className="school">Teldeniya National School</p>
//           <p className="year">2017 – 2019</p>
//         </div>

//         <div className="edu-item">
//           <h3>Certifications (In Progress)</h3>
//           <p className="school">
//             Google Professional Cybersecurity (via Coursera)
//           </p>
//           <p className="school">
//             Microsoft Certified: Azure Fundamentals (AZ-900)
//           </p>
//           <p className="year">Expected 2026</p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SkillsAndEdu;

import React from "react";
import {
  FaTerminal,
  FaCloud,
  FaBrain,
  FaGraduationCap,
  FaCalendarCheck,
} from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";
import { FaTools } from "react-icons/fa";

const SkillsAndEdu = () => {
  return (
    <div className="info-grid">
      {/* 🛠️ 1. PROFESSIONAL TECHNICAL SKILLS BENTO BLOCK */}
      <section className="skills-section">
        <h2 className="section-bento-title">
          <FaTools className="title-icon" /> Professional Technical Skills
        </h2>

        {/* FRONTEND ARCHITECTURE */}
        <div className="skills-group">
          <h3>
            <FaTerminal className="sub-group-icon" /> Frontend Architecture
          </h3>
          <div className="skills-tags">
            <span>React.js</span>
            <span>SASS / SCSS Blueprinting</span>
            <span>JavaScript (ES6+)</span>
            <span>HTML5 & CSS3</span>
            <span>Responsive Web Design</span>
            <span>UI/UX Visual Engineering</span>
          </div>
        </div>

        {/* BACKEND & CLOUD UTILITIES */}
        <div className="skills-group">
          <h3>
            <FaCloud className="sub-group-icon" /> Backend & Cloud Utilities
          </h3>
          <div className="skills-tags">
            <span>Firebase Firestore</span>
            <span>EmailJS Integration</span>
            <span>Web App Security Layering</span>
            <span>Data Anonymity Arrays</span>
          </div>
        </div>

        {/* ENGINEERING TOOLS & PLATFORMS */}
        <div className="skills-group">
          <h3>
            <FaTools className="sub-group-icon" /> Engineering Tools & Platforms
          </h3>
          <div className="skills-tags">
            <span>Vercel</span>
            <span>Netlify</span>
            <span>VS Code</span>
            <span>Chrome DevTools</span>
            <span>npm (Node Package Manager)</span>
            <span>Git / GitHub</span>
          </div>
        </div>

        {/* AI & WORKFLOW OPTIMIZATION */}
        <div className="skills-group">
          <h3>
            <FaBrain className="sub-group-icon" /> AI & Workflow Optimization
          </h3>
          <div className="skills-tags">
            <span>Cursor AI</span>
            <span>Claude AI Assisted Coding</span>
            <span>Algorithmic Problem Solving</span>
          </div>
        </div>
      </section>

      {/* 🎓 2. EDUCATION & CERTIFICATIONS BENTO BLOCK */}
      <section className="education-section">
        <h2 className="section-bento-title">
          <FaGraduationCap className="title-icon" /> Education & Credentials
        </h2>

        {/* A/L CREDENTIALS */}
        <div className="edu-item">
          <h3 className="edu-degree-title">G.C.E. Advanced Level (A/L)</h3>
          <p className="school-name">Teldeniya National School</p>
          <span className="edu-year-badge">
            <FaCalendarCheck /> 2020 – 2023
          </span>
        </div>

        {/* O/L CREDENTIALS */}
        <div className="edu-item">
          <h3 className="edu-degree-title">G.C.E. Ordinary Level (O/L)</h3>
          <p className="school-name">Teldeniya National School</p>
          <span className="edu-year-badge">
            <FaCalendarCheck /> 2017 – 2019
          </span>
        </div>

        {/* LIVE IN-PROGRESS CERTIFICATIONS */}
        <div className="edu-item certifications-live-node">
          <h3 className="edu-degree-title">Certifications (In Progress)</h3>
          <p className="school-name text-glow-blue">
            <IoCheckmarkCircle className="cert-check" /> Google Professional
            Cybersecurity (via Coursera)
          </p>
          <p className="school-name text-glow-blue">
            <IoCheckmarkCircle className="cert-check" /> Microsoft Certified:
            Azure Fundamentals (AZ-900)
          </p>
          <span className="edu-year-badge expected-badge">Expected 2026</span>
        </div>
      </section>
    </div>
  );
};

export default SkillsAndEdu;
