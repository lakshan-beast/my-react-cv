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
      <section className="skills-section">
        <h2 className="section-bento-title">
          <FaTools className="title-icon" /> Professional Technical Skills
        </h2>

        <div className="skills-group">
          <h3>
            <FaTerminal className="sub-group-icon" /> Frontend Architecture
          </h3>
          <div className="skills-tags">
            <span>React.js</span>
            <span>Tailwind CSS</span>
            <span>SASS / SCSS Blueprinting</span>
            <span>TypeScript</span>
            <span>JavaScript (ES6+)</span>
            <span>HTML5 & CSS3</span>
            <span>Responsive Web Design</span>
            <span>UI/UX Visual Engineering</span>
          </div>
        </div>

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

      <section className="education-section">
        <h2 className="section-bento-title">
          <FaGraduationCap className="title-icon" /> Education & Credentials
        </h2>

        <div className="edu-item">
          <h3 className="edu-degree-title">G.C.E. Advanced Level (A/L)</h3>
          <p className="school-name">Teldeniya National School</p>
          <span className="edu-year-badge">
            <FaCalendarCheck /> 2020 – 2023
          </span>
        </div>

        <div className="edu-item">
          <h3 className="edu-degree-title">G.C.E. Ordinary Level (O/L)</h3>
          <p className="school-name">Teldeniya National School</p>
          <span className="edu-year-badge">
            <FaCalendarCheck /> 2017 – 2019
          </span>
        </div>

        <div className="edu-item certifications-live-node">
          <h3 className="edu-degree-title">Certifications (In Progress)</h3>
          <p className="school-name text-glow-blue">
            <IoCheckmarkCircle className="cert-check" /> British Council : Learn
            English Workplace Proficiency Certificate
          </p>
          <p className="school-name text-glow-blue">
            <IoCheckmarkCircle className="cert-check" /> OpenAI Academy:
            Artificial Intelligence Foundations Certificate
          </p>
          <p className="school-name text-glow-blue">
            <IoCheckmarkCircle className="cert-check" /> IBM SkillsBuild:
            Cybersecurity Fundamentals
          </p>
          <p className="school-name text-glow-blue">
            <IoCheckmarkCircle className="cert-check" /> Microsoft Certified:
            Azure Fundamentals (AZ-900)
          </p>
          <p className="school-name text-glow-blue">
            <IoCheckmarkCircle className="cert-check" /> Cisco Networking
            Academy : Junior Cybersecurity Analyst Career Path Certificate
          </p>
          <span className="edu-year-badge expected-badge">Expected 2026</span>
        </div>
      </section>
    </div>
  );
};

export default SkillsAndEdu;
