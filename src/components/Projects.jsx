import React from "react";
import {
  FaFolderOpen,
  FaArrowUpRightFromSquare,
  FaCircleCheck,
} from "react-icons/fa6";

const Projects = () => {
  const projectList = [
    {
      title: "Educa | Advance Learning Platform | (95%)",
      desc: "A comprehensive educational resource hub providing students with organized, downloadable study materials and lesson notes through a minimalist and user-friendly React interface.",
      tech: [
        "React.js",
        "SASS Blueprinting",
        "State Management",
        "Web Security",
      ],
      live: "https://educa-lms-platform.vercel.app/",
    },
    {
      title: "Zestara | in process",
      desc: "Designed and developed a premium, conversion-optimized e-commerce storefront frontend utilizing advanced component blueprinting. Engineered custom relational client-side search engines and multi-tier fuzzy product filtering algorithms.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "State Management",
        "Fuzzy Search Engine",
      ],
      // live: "https://zestara.vercel.app",
      live: "",
    },
    {
      title: "Dream Tracker",
      desc: "Architected an interactive academic tracker featuring gamified focus timers and real-time behavioral data structures. Programmed automated study schedulers and rendered high-density performance indices using Recharts.",
      tech: ["React.js", "SASS Blueprinting", "Recharts", "Firebase Firestore"],
      live: "https://future-plan-six.vercel.app",
    },
    {
      title: "info.lanka | (Js Practice | first project)",
      desc: "Built a fully responsive civic services index portal aggregating access metrics for over 200+ verified public sectors. Implemented a lightning-fast client-side keyword search engine running fuzzy matching loops over local JSON data.",
      tech: ["React.js", "SASS Blueprinting", "Keyword Algorithms"],
      live: "https://info-lanka-project.vercel.app",
    },
  ];

  return (
    <section className="projects-section">
      <h2 className="section-bento-title">
        <FaFolderOpen className="section-title-icon" /> Featured Projects
      </h2>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title-heading">{project.title}</h3>
            <p className="project-description-text">{project.desc}</p>

            <div className="tech-stack-wrapper-tags">
              {project.tech.map((techItem, i) => (
                <span key={i} className="tech-tag-badge">
                  <FaCircleCheck className="tech-badge-dot" /> {techItem}
                </span>
              ))}
            </div>

            <div className="project-links-footer-action-hub">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="download-resource-btn-link">
                Live Demo{" "}
                <FaArrowUpRightFromSquare className="link-arrow-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
