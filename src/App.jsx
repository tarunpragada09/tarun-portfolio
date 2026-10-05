import React from "react";

const skills = [
  {
    icon: "AI",
    title: "AI / MACHINE LEARNING",
    items: ["Machine Learning", "NLP", "Scikit-learn", "Artificial Intelligence"],
  },
  {
    icon: "⌘",
    title: "PROGRAMMING",
    items: ["C++", "Python", "JavaScript", "SQL"],
  },
  {
    icon: "WEB",
    title: "WEB DEVELOPMENT",
    items: ["React", "HTML", "CSS", "JavaScript", "Streamlit"],
  },
  {
    icon: "DS",
    title: "CORE CS",
    items: ["Data Structures", "Algorithms", "OOP", "DBMS"],
  },
  {
    icon: "DATA",
    title: "DATA & LIBRARIES",
    items: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    icon: "DEV",
    title: "DEVELOPER TOOLS",
    items: ["Git", "GitHub", "VS Code", "n8n"],
  },
];

const certificates = [
  {
    number: "01",
    title: "Oracle Data Platform 2025",
    subtitle: "Certified Foundations Associate",
    issuer: "Oracle University",
    image: "/certificates/oracle-foundations.png",
  },
  {
    number: "02",
    title: "CodeClash",
    subtitle: "Coding Competition",
    issuer: "AccentureEmph",
    image: "/certificates/codeclash.jpeg",
  },
  {
    number: "03",
    title: "Programming Using C++",
    subtitle: "Programming Certificate",
    issuer: "Infosys",
    image: "/certificates/infosys-cpp.png",
  },
  {
    number: "04",
    title: "Cyber Security & Ethical Hacking",
    subtitle: "Hands-on Workshop",
    issuer: "Secuneus Technologies",
    image: "/certificates/ethical-hacking.png",
  },
];

function App() {
  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">
        <a href="#home" className="logo">
          TP<span>.</span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#training">Training</a>
          <a href="#certificates">Certificates</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="hero" id="home">

        <div className="smoke smoke-one"></div>
        <div className="smoke smoke-two"></div>
        <div className="smoke smoke-three"></div>

        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>

        <div className="hero-content">

          <div className="eyebrow">
            COMPUTER SCIENCE & ENGINEERING
          </div>

          <h1 className="hero-name">
            <span className="name-solid">Tarun</span>
            <span className="name-outline">Pragada.</span>
          </h1>

          <h2>
            AI & Machine Learning
            <span> / Software Engineering Enthusiast</span>
          </h2>

          <p className="hero-description">
            Computer Science and Engineering student specializing in AI &
            Machine Learning, with a strong foundation in C++, Python, Data
            Structures & Algorithms, and software development.
          </p>

          <div className="hero-buttons">
            <a
              href="/Tarun-Pragada-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn primary-btn"
            >
              View Resume ↗
            </a>

            <a href="#projects" className="btn secondary-btn">
              Explore My Work ↓
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/tarun-pragada09"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

            <a
              href="https://github.com/pragadatarun"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a href="mailto:tarunpragada14@gmail.com">
              Email ↗
            </a>
          </div>
        </div>

        {/* PROFILE */}
        <div className="profile-wrapper">

          <div className="profile-ring ring-one"></div>
          <div className="profile-ring ring-two"></div>

          <div className="profile-card">

            <div className="profile-number">
              01 / PROFILE
            </div>

            <div className="profile-image-wrapper">
              <img
                src="/profile.jpg"
                alt="Tarun Pragada"
                className="profile-image"
              />

              <div className="image-scan"></div>
            </div>

            <div className="profile-bottom">
              <strong>Tarun Pragada</strong>
              <span>AI / ML • CSE</span>
            </div>

          </div>
        </div>
      </section>


      {/* ================= ABOUT ================= */}
      <section className="section" id="about">

        <div className="section-label">
          <span>01</span>
          ABOUT ME
        </div>

        <div className="about-layout">

          <h2>
            Building practical
            <br />
            <span>solutions with AI.</span>
          </h2>

          <div className="about-text">
            <p>
              I am a Computer Science and Engineering student specializing in
              AI & Machine Learning, with a strong foundation in C++, Python,
              Data Structures & Algorithms, and software development.
            </p>

            <p>
              I enjoy building machine learning and NLP applications,
              web-based solutions, and Agentic AI workflow automation.
            </p>

            <p>
              I am passionate about solving real-world problems through AI
              and scalable software solutions, with a strong interest in
              Software Engineering, AI/ML, and Applied AI roles.
            </p>
          </div>

        </div>
      </section>


      {/* ================= SKILLS ================= */}
      <section className="section" id="skills">

        <div className="section-label">
          <span>02</span>
          TECHNICAL SKILLS
        </div>

        <h2 className="section-heading">
          Tools I use to
          <br />
          <span>build things.</span>
        </h2>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-category" key={skill.title}>

              <div className="skill-image">
                <span>{skill.icon}</span>
                <div className="skill-orbit"></div>
              </div>

              <div className="skill-content">

                <div className="skill-number">
                  0{index + 1}
                </div>

                <h3>{skill.title}</h3>

                <div className="skill-list">
                  {skill.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>

              </div>

            </div>
          ))}

        </div>
      </section>


      {/* ================= PROJECT ================= */}
      <section className="section" id="projects">

        <div className="section-label">
          <span>03</span>
          FEATURED PROJECT
        </div>

        <div className="project-card">

          <div className="project-visual">

            <div className="project-screen">

              <div className="screen-top">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="ai-brain">
                <div className="brain-core">AI</div>
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>

              <div className="mail-lines">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="spam-badge">
                SPAM DETECTION
              </div>

            </div>

          </div>

          <div className="project-main">

            <div className="project-index">01</div>

            <div className="project-type">
              MACHINE LEARNING • NLP
            </div>

            <h2>Spam Mail Detection</h2>

            <p className="project-description">
              A machine learning application designed to classify emails as
              Spam or Not Spam using NLP-based text preprocessing and machine
              learning techniques.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>NLP</span>
              <span>Machine Learning</span>
              <span>Scikit-learn</span>
              <span>Streamlit</span>
            </div>

            <a
              href="https://github.com/tarunpragada09/spam-mail-detection"
              target="_blank"
              rel="noreferrer"
              className="project-button"
            >
              View Project on GitHub ↗
            </a>

          </div>
        </div>
      </section>


      {/* ================= TRAINING ================= */}
      <section className="section" id="training">

        <div className="section-label">
          <span>04</span>
          TRAINING
        </div>

        <div className="training-card">

          <div className="training-visual">

            <div className="sre-dashboard">

              <div className="dashboard-header">
                <span className="status-dot"></span>
                SRE MONITOR
              </div>

              <div className="dashboard-chart">
                <div className="chart-line"></div>
                <div className="chart-line line-two"></div>
                <div className="chart-point p1"></div>
                <div className="chart-point p2"></div>
                <div className="chart-point p3"></div>
              </div>

              <div className="dashboard-items">
                <span>CPU</span>
                <span>MEMORY</span>
                <span>LATENCY</span>
              </div>

              <div className="agent-badge">
                AGENTIC AI
              </div>

            </div>

          </div>

          <div className="training-content">

            <div className="project-index">01</div>

            <div className="project-type">
              AGENTIC AI • SRE • AUTOMATION
            </div>

            <h2>
              Agentic AI-Based SRE
              <br />
              Performance Monitoring
              <br />
              & Automated Remediation
            </h2>

            <p>
              Training project focused on intelligent system monitoring,
              performance analysis, Agentic AI workflows, and automated
              remediation for Site Reliability Engineering environments.
            </p>

            <div className="training-meta">
              <span>LPU</span>
              <span>JUN 2026 – JUL 2026</span>
            </div>

          </div>

        </div>
      </section>


      {/* ================= CERTIFICATES ================= */}
      <section className="section" id="certificates">

        <div className="section-label">
          <span>05</span>
          CERTIFICATIONS
        </div>

        <h2 className="section-heading">
          Learning, building,
          <br />
          <span>and growing.</span>
        </h2>

        <div className="certificates-grid">

          {certificates.map((certificate) => (
            <div className="certificate-card" key={certificate.number}>

              <div className="certificate-preview">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                />

                <div className="certificate-overlay">
                  <a
                    href={certificate.image}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Certificate ↗
                  </a>
                </div>

              </div>

              <div className="certificate-info">

                <div className="certificate-top">
                  <span>{certificate.number}</span>
                  <span>VERIFIED</span>
                </div>

                <h3>{certificate.title}</h3>

                <p>{certificate.subtitle}</p>

                <small>{certificate.issuer} ↗</small>

              </div>

            </div>
          ))}

        </div>
      </section>


      {/* ================= CONTACT ================= */}
      <section className="contact-section" id="contact">

        <div className="contact-smoke"></div>

        <div className="section-label">
          <span>06</span>
          CONTACT
        </div>

        <h2>
          Let's build
          <br />
          <span>something meaningful.</span>
        </h2>

        <p className="contact-description">
          Open to Software Engineering, AI/ML and Applied AI opportunities.
        </p>

        <a
          href="mailto:tarunpragada14@gmail.com"
          className="contact-email"
        >
          tarunpragada14@gmail.com ↗
        </a>

        <div className="contact-socials">

          <a
            href="https://www.linkedin.com/in/tarun-pragada09"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/pragadatarun"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer>
        <span>© 2026 Tarun Pragada</span>
        <span>Built with React • AI • Creativity</span>
      </footer>

    </div>
  );
}

export default App;