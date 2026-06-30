// // src/components/Projects.jsx
// import React from "react";

// const Projects = () => {
//   // ඔබ එවපු ප්‍රොජෙක්ට් විස්තර Array එකක් විදිහට මෙතන තියෙනවා
//   const projectList = [
//     {
//       title: "Apex Exam Portal",
//       desc: "Architected a secure, concurrent examination platform handling high volumes of simultaneous student assessment submissions. Implemented core compliance security layers including data anonymity arrays, right-click blocks, and anti-screenshot protections.",
//       tech: ["React.js", "SASS", "State Management", "Web Security"],
//     },
//     {
//       title: "Zestara",
//       desc: "Designed and developed a premium, conversion-optimized e-commerce storefront frontend utilizing advanced component blueprinting. Engineered custom relational client-side search engines and multi-tier fuzzy product filtering algorithms.",
//       tech: ["React.js", "SASS", "State Management", "Fuzzy Search Engine"],
//     },
//     {
//       title: "Dream Tracker",
//       desc: "Architected an interactive academic tracker featuring gamified focus timers and real-time behavioral data structures. Programmed automated study schedulers and rendered high-density performance indices using Recharts.",
//       tech: ["React.js", "SASS", "Recharts", "Firebase Firestore"],
//     },
//     {
//       title: "info.lanka",
//       desc: "Built a fully responsive civic services index portal aggregating access metrics for over 200+ verified public sectors. Implemented a lightning-fast client-side keyword search engine running fuzzy matching loops over local JSON data.",
//       tech: ["React.js", "SASS Blueprinting", "Keyword Algorithms"],
//     },
//   ];

//   return (
//     <section className="projects-section">
//       <h2>Featured Projects</h2>
//       <div className="projects-grid">
//         {projectList.map((project, index) => (
//           <div key={index} className="project-card">
//             <h3>{project.title}</h3>
//             <p>{project.desc}</p>
//             <div className="tech-stack">
//               {project.tech.map((techItem, i) => (
//                 <span key={i}>{techItem}</span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

// src/components/Projects.jsx
import React from "react";

const Projects = () => {
  const projectList = [
    {
      title: "Educa | Advance Learning Platform",
      desc: "A comprehensive educational resource hub providing students with organized, downloadable study materials and lesson notes through a minimalist and user-friendly React interface.",
      tech: ["React.js", "SASS", "State Management", "Web Security"],
      live: "https://educa-lms-platform.vercel.app/",
    },
    {
      title: "Zestara | in process",
      desc: "Designed and developed a premium, conversion-optimized e-commerce storefront frontend utilizing advanced component blueprinting. Engineered custom relational client-side search engines and multi-tier fuzzy product filtering algorithms.",
      tech: ["React.js", "SASS", "State Management", "Fuzzy Search Engine"],
      live: "https://zestara.vercel.app",
    },
    {
      title: "Dream Tracker",
      desc: "Architected an interactive academic tracker featuring gamified focus timers and real-time behavioral data structures. Programmed automated study schedulers and rendered high-density performance indices using Recharts.",
      tech: ["React.js", "SASS", "Recharts", "Firebase Firestore"],
      live: "https://future-plan-six.vercel.app",
    },
    {
      title: "info.lanka | Services",
      desc: "Built a fully responsive civic services index portal aggregating access metrics for over 200+ verified public sectors. Implemented a lightning-fast client-side keyword search engine running fuzzy matching loops over local JSON data.",
      tech: ["React.js", "SASS Blueprinting", "Keyword Algorithms"],
      live: "https://info-lanka-project.vercel.app",
    },
  ];

  return (
    <section className="projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>

            {/* SASS වලින් මේ links ලස්සන කරමු */}
            <div className="project-links">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="link-live">
                Live Demo
              </a>
            </div>

            <div className="tech-stack">
              {project.tech.map((techItem, i) => (
                <span key={i}>{techItem}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
