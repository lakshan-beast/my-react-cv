// // src/components/SkillsAndEdu.jsx
// import React from "react";

// const SkillsAndEdu = () => {
//   return (
//     <div className="info-grid">
//       {/* 1. SKILLS SECTION */}
//       <section className="skills-section">
//         <h2>Skills</h2>

//         <div className="skills-group">
//           <h3>Core Frontend</h3>
//           <div className="skills-tags">
//             <span>React.js</span>
//             <span>SASS / SCSS</span>
//             <span>JavaScript (ES6+)</span>
//             <span>HTML5 & CSS3</span>
//             <span>Responsive Blueprinting</span>
//             <span>Next.js</span>
//           </div>
//         </div>

//         <div className="skills-group">
//           <h3>Expertise & Logic</h3>
//           <div className="skills-tags">
//             <span>UI/UX Visual Engineering</span>
//             <span>Algorithmic Problem Solving</span>
//             <span>Fuzzy Search Algorithms</span>
//             <span>Web App Security</span>
//             <span>State Management</span>
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

// src/components/SkillsAndEdu.jsx
import React from "react";

const SkillsAndEdu = () => {
  return (
    <div className="info-grid">
      {/* 1. PROFESSIONAL SKILLS SECTION */}
      <section className="skills-section">
        <h2>Professional Technical Skills</h2>

        <div className="skills-group">
          <h3>Frontend Architecture</h3>
          <div className="skills-tags">
            <span>React.js</span>
            <span>SASS / SCSS Blueprinting</span>
            <span>JavaScript (ES6+)</span>
            <span>HTML5 & CSS3</span>
            <span>Responsive Web Design</span>
            <span>UI/UX Visual Engineering</span>
          </div>
        </div>

        <div className="skills-group">
          <h3>Backend & Cloud Utilities</h3>
          <div className="skills-tags">
            <span>Firebase Firestore</span>
            <span>EmailJS Integration</span>
            <span>Web App Security Layering</span>
            <span>Data Anonymity Arrays</span>
          </div>
        </div>

        <div className="skills-group">
          <h3>Engineering Tools & Platforms</h3>
          <div className="skills-tags">
            <span>Vercel</span>
            <span>Netlify</span>
            <span>VS Code</span>
            <span>Chrome DevTools</span>
            <span>npm (Node Package Manager)</span>
            <span>Git / GitHub</span>
          </div>
        </div>

        <div className="skills-group">
          <h3>AI & Workflow Optimization</h3>
          <div className="skills-tags">
            <span>Cursor AI</span>
            <span>Claude AI Assisted Coding</span>
            <span>Algorithmic Problem Solving</span>
          </div>
        </div>
      </section>

      {/* 2. EDUCATION & CERTIFICATIONS SECTION */}
      <section className="education-section">
        <h2>Education & Credentials</h2>

        <div className="edu-item">
          <h3>G.C.E. Advanced Level (A/L)</h3>
          <p className="school">Teldeniya National School</p>
          <p className="year">2020 – 2023</p>
        </div>

        <div className="edu-item">
          <h3>G.C.E. Ordinary Level (O/L)</h3>
          <p className="school">Teldeniya National School</p>
          <p className="year">2017 – 2019</p>
        </div>

        <div className="edu-item">
          <h3>Certifications (In Progress)</h3>
          <p className="school">
            Google Professional Cybersecurity (via Coursera)
          </p>
          <p className="school">
            Microsoft Certified: Azure Fundamentals (AZ-900)
          </p>
          <p className="year">Expected 2026</p>
        </div>
      </section>
    </div>
  );
};

export default SkillsAndEdu;
