import profileImg from "./profile-main.jpg";
import beachImg from "./gallery-beach.jpg";
import dunesImg from "./gallery-dunes.jpg";

export default function App() {
  const projects = [
    {
      number: "01",
      title: "ASEI – Unified Integration Platform",
      description:
        "A modern integration platform concept focused on dashboards, monitoring, deployments, and a clean user experience.",
      tech: ["React", "UI Design", "Frontend"],
      link: "https://github.com/nicoleglorioso/ASEI-Project.git",
    },
    {
      number: "02",
      title: "Compression + Encryption File Storage System",
      description:
        "A C-based system for secure and efficient file storage using compression, encryption, and file handling concepts.",
      tech: ["C", "Algorithms", "File Handling"],
      link: "https://edstem.org/au/courses/30973/workspaces/p6FQvLfxVRkqU3EGQlWFmqVdeiH7ggd0",
    },
    {
      number: "03",
      title: "AI in Software Engineering Research",
      description:
        "Research exploring how generative AI tools influence software engineering students during programming tasks.",
      tech: ["AI", "Research", "Software Engineering"],
      link: "https://drive.google.com/file/d/1ib4VbtTt_uLNhxuMRdN42grEQ7W9G0t9/view?usp=sharing",
    },
  ];

  const expertise = [
    {
      number: "01",
      title: "Frontend Development",
      text: "I enjoy creating clean, modern, and responsive interfaces that feel professional and easy to use. I like turning ideas into polished digital experiences.",
    },
    {
      number: "02",
      title: "Software Engineering",
      text: "My background in software engineering has helped me build problem-solving skills across programming, systems thinking, and project development.",
    },
    {
      number: "03",
      title: "AI + Research",
      text: "I am currently exploring how generative AI tools affect software engineering education, especially student productivity and programming performance.",
    },
  ];

  const skills = [
    "C",
    "C++",
    "Python",
    "JavaScript",
    "React",
    "HTML",
    "CSS",
    "Git",
    "Node.js",
    "UI/UX",
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/IndAviya" },
    {
      name: "Instagram",
      url: "https://www.instagram.com/avvinn_ash?igsh=MW1tMGxwMHdoaXB1bw==",
    },
    { name: "Email", url: "mailto:avianshindumina@gmail.com" },
  ];

  const galleryImages = [
    {
      title: "Personal",
      src: beachImg,
      description:
        "Outside of software engineering, I enjoy cricket, fitness, travelling, exploring beaches, and learning new creative skills.",
    },
    {
      title: "Education",
      src: dunesImg,
      description:
        "I am studying Bachelor of Engineering (Honours) in Software Engineering at UTS, focusing on software development, systems testing, data structures, AI, and software analysis.",
    },
  ];

  return (
    <div style={styles.page}>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #0b0b0b; }
        a, button, div, img, span { transition: all 0.3s ease; }

        .nav-link:hover { opacity: 0.7; }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255,255,255,0.25);
          box-shadow: 0 18px 40px rgba(0,0,0,0.35);
        }

        .social-button:hover {
          transform: translateY(-3px);
          background: #1a1a1a;
          border-color: rgba(255,255,255,0.24);
        }

        .skill-pill:hover {
          background: rgba(255,255,255,0.06);
          transform: translateY(-2px);
        }

        .hero-button-primary:hover,
        .hero-button-secondary:hover,
        .resume-button:hover {
          transform: translateY(-2px);
        }

        .profile-image:hover {
          transform: scale(1.02);
        }

        .gallery-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255,255,255,0.22);
          box-shadow: 0 18px 40px rgba(0,0,0,0.28);
        }

        .gallery-card:hover img {
          transform: scale(1.04);
        }

        .gallery-card:hover .gallery-overlay {
          opacity: 1;
          visibility: visible;
        }

        .gallery-card:hover .gallery-title-bar {
          opacity: 0;
        }

        .project-link:hover {
          opacity: 0.8;
        }

        @media (max-width: 768px) {
          .main-header {
            padding: 18px 20px !important;
          }

          .hero-section {
            padding: 20px 20px 40px 20px !important;
          }

          .hero-loop {
            font-size: 34px !important;
          }

          .hero-title {
            font-size: 48px !important;
            line-height: 1 !important;
          }

          .hero-grid {
            gap: 24px !important;
            margin-top: 24px !important;
          }

          .section {
            padding: 36px 20px !important;
          }

          .contact-section {
            padding: 42px 20px !important;
          }

          .footer {
            padding: 20px !important;
          }

          .project-title {
            font-size: 22px !important;
          }

          .gallery-grid {
            grid-template-columns: 1fr !important;
          }

          .profile-image {
            height: 420px !important;
          }

          .gallery-overlay {
            opacity: 1 !important;
            visibility: visible !important;
          }

          .gallery-title-bar {
            opacity: 0 !important;
          }
        }
      `}</style>

      <header style={styles.header} className="main-header">
        <div>
          <p style={styles.brandSmall}>Indumina.™</p>
        </div>

        <nav style={styles.nav}>
          <a href="#about" style={styles.navLink} className="nav-link">
            Info
          </a>
          <a href="#projects" style={styles.navLink} className="nav-link">
            Projects
          </a>
          <a href="#expertise" style={styles.navLink} className="nav-link">
            Skills
          </a>
          <a href="#contact" style={styles.navLink} className="nav-link">
            Contact
          </a>
        </nav>
      </header>

      <section style={styles.hero} className="hero-section">
        <p style={styles.heroLoop} className="hero-loop">
          Developer. Creator. Student. Builder.
        </p>
        <p style={styles.heroLoopMuted} className="hero-loop">
          React. Code. Design. Growth.
        </p>

        <div style={styles.heroGrid} className="hero-grid">
          <div>
            <div style={styles.profileCard}>
              <img
                src={profileImg}
                alt="Indumina profile"
                style={styles.profileImage}
                className="profile-image"
              />
            </div>
          </div>

          <div>
            <p style={styles.heroRole}>Software Engineering Student</p>
            <p style={styles.heroRole}>Frontend Learner</p>
            <p style={styles.heroRole}>AI Researcher</p>

            <h1 style={styles.heroTitle} className="hero-title">
              Hi, I’m Indumina.
            </h1>

            <p style={styles.heroText}>
              I’m a Software Engineering student at UTS, interested in frontend
              development, software systems, and AI in software engineering.
            </p>

            <p style={styles.heroText}>
              I enjoy building clean interfaces, learning modern tools, and
              turning technical ideas into practical projects.
            </p>

            <div style={styles.buttonRow}>
              <a
                href="#projects"
                style={styles.primaryButton}
                className="hero-button-primary"
              >
                Selected Work
              </a>

              <a
                href="#contact"
                style={styles.secondaryButton}
                className="hero-button-secondary"
              >
                Contact Me
              </a>

              <a
                href="https://drive.google.com/file/d/1KCuJ4OlZ5ODXOiBRK5qHpEmyR5x7s-4J/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
                style={styles.resumeButton}
                className="resume-button"
              >
                View Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.section} className="section">
        <p style={styles.sectionLabel}>Profile</p>

        <div style={styles.galleryGrid} className="gallery-grid">
          {galleryImages.map((image) => (
            <div
              key={image.title}
              style={styles.galleryCard}
              className="gallery-card"
            >
              <img
                src={image.src}
                alt={image.title}
                style={styles.galleryImage}
              />

              <div style={styles.galleryOverlay} className="gallery-overlay">
                <h3 style={styles.galleryOverlayTitle}>{image.title}</h3>
                <p style={styles.galleryOverlayText}>{image.description}</p>
              </div>

              <div style={styles.galleryMeta} className="gallery-title-bar">
                <p style={styles.galleryTitle}>{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" style={styles.section} className="section">
        <p style={styles.sectionLabel}>Info</p>

        <h2 style={styles.sectionHeading}>
          A software engineering student building projects and learning how to
          combine design, code, and research into useful digital experiences.
        </h2>

        <p style={styles.sectionText}>
          My portfolio is focused on the things I’m growing in right now:
          React, frontend development, software engineering projects, and AI
          research. I want my work to feel simple, useful, and well designed.
        </p>
      </section>

      <section id="projects" style={styles.section} className="section">
        <p style={styles.sectionLabel}># Selected Cases</p>

        <div style={styles.projectGrid}>
          {projects.map((project) => (
            <div
              key={project.title}
              style={styles.projectCard}
              className="project-card"
            >
              <p style={styles.projectNumber}>{project.number}.</p>

              <h3 style={styles.projectTitle} className="project-title">
                {project.title}
              </h3>

              <p style={styles.projectDescription}>{project.description}</p>

              <div style={styles.tagRow}>
                {project.tech.map((item) => (
                  <span key={item} style={styles.tag}>
                    {item}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={styles.projectLink}
                className="project-link"
              >
                View project →
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="expertise" style={styles.section} className="section">
        {expertise.map((item) => (
          <div key={item.number} style={styles.expertiseBlock}>
            <p style={styles.expertiseNumber}>{item.number}.</p>
            <h3 style={styles.expertiseTitle}>{item.title}</h3>
            <p style={styles.expertiseText}>{item.text}</p>
          </div>
        ))}
      </section>

      <section style={styles.section} className="section">
        <p style={styles.sectionLabel}>Tools & Skills</p>

        <div style={styles.skillsWrap}>
          {skills.map((skill) => (
            <span key={skill} style={styles.skillPill} className="skill-pill">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section
        id="contact"
        style={styles.contactSection}
        className="contact-section"
      >
        <p style={styles.sectionLabel}>Let’s connect</p>

        <h2 style={styles.contactHeading}>
          I love creating things through code and design.
        </h2>

        <p style={styles.contactText}>
          If you want to see my work, collaborate, or just say hi, you can find
          me here.
        </p>

        <div style={styles.socialRow}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              style={styles.socialButton}
              className="social-button"
            >
              {link.name}
            </a>
          ))}
        </div>

        <p style={styles.emailText}>avianshindumina@gmail.com</p>
      </section>

      <footer style={styles.footer} className="footer">
        2026 © | Built by Indumina with React
      </footer>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#0b0b0b",
    color: "#f5f5f5",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    margin: 0,
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "24px 32px",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
    flexWrap: "wrap",
    gap: "12px",
    position: "sticky",
    top: 0,
    zIndex: 20,
    backgroundColor: "rgba(11,11,11,0.88)",
    backdropFilter: "blur(10px)",
  },
  brandSmall: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "700",
    letterSpacing: "0.5px",
  },
  nav: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  navLink: {
    color: "#f5f5f5",
    textDecoration: "none",
    fontSize: "14px",
  },
  hero: {
    padding: "32px 32px 52px 32px",
  },
  heroLoop: {
    margin: "0 0 8px 0",
    fontSize: "clamp(28px, 6vw, 68px)",
    fontWeight: "800",
    lineHeight: "1",
    letterSpacing: "-1px",
    color: "#f5f5f5",
  },
  heroLoopMuted: {
    margin: "0",
    fontSize: "clamp(22px, 5vw, 54px)",
    fontWeight: "700",
    lineHeight: "1",
    letterSpacing: "-1px",
    color: "#6f6f6f",
  },
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "40px",
    marginTop: "32px",
    alignItems: "center",
  },
  profileCard: {
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "26px",
    overflow: "hidden",
    backgroundColor: "#111111",
    maxWidth: "440px",
  },
  profileImage: {
    width: "100%",
    height: "560px",
    objectFit: "cover",
    display: "block",
  },
  heroRole: {
    margin: "0 0 8px 0",
    fontSize: "18px",
    color: "#bdbdbd",
  },
  heroTitle: {
    margin: "14px 0 18px 0",
    fontSize: "clamp(42px, 7vw, 92px)",
    lineHeight: "0.95",
    letterSpacing: "-2px",
  },
  heroText: {
    fontSize: "17px",
    lineHeight: "1.8",
    color: "#cfcfcf",
    maxWidth: "720px",
  },
  buttonRow: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    marginTop: "28px",
  },
  primaryButton: {
    backgroundColor: "#f5f5f5",
    color: "#111",
    padding: "12px 18px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "700",
  },
  secondaryButton: {
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#f5f5f5",
    padding: "12px 18px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "700",
  },
  resumeButton: {
    border: "1px solid rgba(255,255,255,0.2)",
    color: "#f5f5f5",
    padding: "12px 18px",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: "700",
  },
  section: {
    padding: "48px 32px",
    borderTop: "1px solid rgba(255,255,255,0.06)",
  },
  sectionLabel: {
    fontSize: "14px",
    color: "#a3a3a3",
    marginBottom: "18px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  sectionHeading: {
    fontSize: "clamp(28px, 4vw, 52px)",
    lineHeight: "1.15",
    maxWidth: "1000px",
    margin: "0 0 18px 0",
  },
  sectionText: {
    fontSize: "17px",
    lineHeight: "1.8",
    color: "#cfcfcf",
    maxWidth: "850px",
  },
  galleryGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "18px",
  },
  galleryCard: {
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "24px",
    overflow: "hidden",
    backgroundColor: "#111111",
    position: "relative",
  },
  galleryImage: {
    width: "100%",
    height: "420px",
    objectFit: "cover",
    display: "block",
  },
  galleryOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.35))",
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    padding: "30px",
    opacity: 0,
    visibility: "hidden",
    zIndex: 3,
  },
  galleryOverlayTitle: {
    margin: "0 0 10px 0",
    fontSize: "30px",
    fontWeight: "800",
  },
  galleryOverlayText: {
    margin: 0,
    fontSize: "16px",
    lineHeight: "1.7",
    maxWidth: "680px",
  },
  galleryMeta: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: "18px 16px",
    background: "linear-gradient(to top, rgba(0,0,0,0.65), transparent)",
    zIndex: 2,
  },
  galleryTitle: {
    margin: 0,
    fontSize: "15px",
    color: "#ffffff",
    fontWeight: "700",
  },
  projectGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "18px",
  },
  projectCard: {
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "20px",
    padding: "24px",
    backgroundColor: "#111111",
  },
  projectNumber: {
    margin: "0 0 12px 0",
    color: "#9e9e9e",
    fontWeight: "700",
  },
  projectTitle: {
    margin: "0 0 12px 0",
    fontSize: "24px",
    lineHeight: "1.2",
  },
  projectDescription: {
    margin: "0 0 16px 0",
    color: "#cfcfcf",
    lineHeight: "1.7",
    fontSize: "15px",
  },
  tagRow: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    marginBottom: "18px",
  },
  tag: {
    border: "1px solid rgba(255,255,255,0.12)",
    padding: "6px 10px",
    borderRadius: "999px",
    fontSize: "12px",
    color: "#d4d4d4",
  },
  projectLink: {
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: "700",
  },
  expertiseBlock: {
    padding: "18px 0 28px 0",
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  },
  expertiseNumber: {
    margin: "0 0 8px 0",
    color: "#9e9e9e",
    fontWeight: "700",
  },
  expertiseTitle: {
    margin: "0 0 10px 0",
    fontSize: "28px",
  },
  expertiseText: {
    margin: 0,
    color: "#cfcfcf",
    lineHeight: "1.8",
    maxWidth: "860px",
  },
  skillsWrap: {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  },
  skillPill: {
    padding: "10px 14px",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "999px",
    color: "#e5e5e5",
    fontSize: "14px",
  },
  contactSection: {
    padding: "56px 32px",
    borderTop: "1px solid rgba(255,255,255,0.06)",
  },
  contactHeading: {
    fontSize: "clamp(28px, 4vw, 54px)",
    margin: "0 0 14px 0",
    lineHeight: "1.1",
  },
  contactText: {
    color: "#cfcfcf",
    fontSize: "17px",
    lineHeight: "1.8",
    maxWidth: "760px",
    marginBottom: "24px",
  },
  socialRow: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
  },
  socialButton: {
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "999px",
    padding: "12px 18px",
    color: "#ffffff",
    textDecoration: "none",
    backgroundColor: "#111111",
    fontWeight: "700",
  },
  emailText: {
    marginTop: "22px",
    color: "#9e9e9e",
    fontSize: "15px",
  },
  footer: {
    padding: "24px 32px 40px 32px",
    color: "#9e9e9e",
    borderTop: "1px solid rgba(255,255,255,0.06)",
    fontSize: "14px",
  },
};