import React from "react";
import { cvData } from "../../data/cvData";
import "../../styles/New.css";

const ResumeTwoColumn = () => {
  const {
    personalInfo,
    summary,
    experience,
    technicalSkills,
    projects,
    education,
    certifications,
    interests,
    languages,
  } = cvData;

  return (
    <div>
      {/* Floating Print Button */}
      <div className="action-bar no-print">
        <button onClick={() => window.print()} className="print-btn">
          Download Dark Blue PDF CV
        </button>
      </div>

      {/* Main Resume Canvas */}
      <div className="resume-card">
        {/* LEFT COLUMN: Main Experience & Projects */}
        <main className="main-column">
          <header>
            <h1 className="candidate-name">{personalInfo.name}</h1>
            <div className="candidate-title">{personalInfo.title}</div>
          </header>

          <section>
            <div className="section-title-left">Professional Summary</div>
            <p
              style={{
                fontSize: "10.5px",
                lineHeight: "1.5",
                color: "#334155",
              }}>
              {summary}
            </p>
          </section>

          <section>
            <div className="section-title-left">Work Experience</div>
            {experience.map((exp, idx) => (
              <div key={idx} className="entry-block">
                <div className="entry-header">
                  <span className="entry-title">{exp.company}</span>
                  <span className="entry-date">{exp.period}</span>
                </div>
                <div className="entry-subtitle">{exp.role}</div>
                <ul className="bullet-list">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section>
            <div className="section-title-left">Technical Projects</div>
            {projects.map((proj, idx) => (
              <div key={idx} className="entry-block">
                <div className="entry-header">
                  <span className="entry-title">
                    {proj.name} {proj.tagline && `— ${proj.tagline}`}
                  </span>
                  <span className="entry-date">
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#1d4ed8", textDecoration: "none" }}>
                      Live Demo
                    </a>
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "10px",
                    color: "#1e3a8a",
                    fontWeight: "600",
                    margin: "2px 0 4px 0",
                  }}>
                  {/* Tech Stack:{" "} */}
                  {proj.tags ? proj.tags.join(", ") : proj.techStack}
                </p>
                <p
                  style={{
                    fontSize: "10.5px",
                    color: "#334155",
                    lineHeight: "1.4",
                    borderTop: "1px solid #f1f1f1",
                  }}>
                  {proj.description}
                </p>
              </div>
            ))}
          </section>
        </main>

        {/* RIGHT COLUMN: Sidebar (Dark Blue Accent & Light Blue Bg) */}
        <aside className="sidebar-column">
          <div className="section-title-right">Contact</div>
          <ul className="sidebar-list">
            <li>• {personalInfo.location}</li>
            <li>• {personalInfo.phone}</li>
            <li>
              •<a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </li>
            <li>
              •{" "}
              <a
                href={personalInfo.links.portfolio}
                target="_blank"
                rel="noreferrer">
                Portfolio Site
              </a>
            </li>
            <li>
              •{" "}
              <a
                href={personalInfo.links.github}
                target="_blank"
                rel="noreferrer">
                Github Profile
              </a>
            </li>
            <li>
              •{" "}
              <a
                href={personalInfo.links.linkedin}
                target="_blank"
                rel="noreferrer">
                Linkedin Profile
              </a>
            </li>
          </ul>

          <div className="section-title-right">Skills</div>

          <div className="skill-category-title">Frontend Architecture:</div>
          <ul className="sidebar-list">
            {technicalSkills.frontend.map((s, i) => (
              <li key={i}>• {s}</li>
            ))}
          </ul>

          <div className="skill-category-title">Backend & Cloud:</div>
          <ul className="sidebar-list">
            {technicalSkills.backendCloud.map((s, i) => (
              <li key={i}>• {s}</li>
            ))}
          </ul>

          <div className="skill-category-title">Tools & Infrastructure:</div>
          <ul className="sidebar-list">
            {technicalSkills.toolsPlatforms.map((s, i) => (
              <li key={i}>• {s}</li>
            ))}
          </ul>

          <div className="section-title-right">Education</div>
          {education.map((edu, idx) => (
            <div key={idx} style={{ marginBottom: "8px", fontSize: "10.5px" }}>
              <div style={{ fontWeight: "700", color: "#0f172a" }}>
                {edu.exam || edu.degree}
              </div>
              <div style={{ color: "#475569" }}>
                {edu.school || edu.institution}
              </div>
              <div style={{ fontSize: "10px", color: "#64748b" }}>
                {edu.period}
              </div>
            </div>
          ))}

          <div className="section-title-right">Certifications</div>
          <ul className="sidebar-list">
            {certifications.map((cert, idx) => (
              <li key={idx}>• {cert}</li>
            ))}
          </ul>

          <div className="section-title-right">Languages</div>
          <ul className="sidebar-list">
            {languages.map((lang, idx) => (
              <li key={idx}>• {lang}</li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default ResumeTwoColumn;
