import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
    <div className="projects-header">
        <h2>Projects</h2>
        <span>(04)</span>
      </div>

      <div className="projects-grid">
        {/* Project 1 – Homewala */}
        <div className="project-card">
        
          <div className="project-content">
            <h3>Homewala – Real Estate Platform</h3>
            <p>
              A real estate website developed to improve lead generation,
              usability, and SEO performance. Worked on responsive UI,
              data integration, and user-friendly improvements.
            </p>
            <div className="tech-stack">
              <span>ReactJS</span>
              <span>SEO</span>
              <span>Lead Generation</span>
              <span>User Friendly</span>
              <span>Laravel</span>
              <span>MySQL</span>
            </div>
            <div className="project-links">
  <a
    href="https://www.homewala.com/"
    target="_blank"
    rel="noreferrer"
  >
    Live Website
  </a>
</div>
          </div>
        </div>

        {/* Project 2 – Petty Cash */}
        <div className="project-card">
         
          <div className="project-content">
            <h3>Petty Cash Management System</h3>
            <p>
              A web application built for a tea shop to manage daily expenses,
              reduce manual records, and generate simple reports with an
              easy-to-use interface.
            </p>
            <div className="tech-stack">
              <span>ReactJS</span>
              <span>PHP</span>
              <span>MySQL</span>
            </div>
            <div className="project-links">
                <a
    href="https://www.behance.net/gallery/214009023/PettyCash"
    target="_blank"
    rel="noreferrer"
  >
    Live Website
  </a>
            </div>
          </div>
        </div>

        {/* Project 3 – Portfolio */}
        <div className="project-card">
         
          <div className="project-content">
            <h3>Personal Portfolio Website</h3>
            <p>
              A modern and fully responsive portfolio website showcasing
              skills, experience, and projects with a clean UI.
            </p>
            <div className="tech-stack">
              <span>ReactJS</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>
            <div className="project-links">
              <a
    href="https://nanthakumaranportfolio.vercel.app/"
    target="_blank"
    rel="noreferrer"
  >
    Live Website
  </a>
             
               <a
    href="https://github.com/NanthaSam02/portfolio.git"
    target="_blank"
    rel="noreferrer"
  >
     GitHub
  </a>
            </div>
          </div>
        </div>

       
{/* Project 4 – Homewala (First Version) */}
<div className="project-card">
  <div className="project-content">
    <h3>Homewala – First Version (Demo)</h3>
    <p>
      The initial prototype and first version built for the Homewala real
      estate platform, focusing on responsive layout, property listings,
      and essential UI components.
    </p>
    <div className="tech-stack">
      <span>ReactJS</span>
      <span>CSS</span>
      <span>JavaScript</span>
      <span>Responsive UI</span>
    </div>
    <div className="project-links">
      <a
        href="https://homewalafirstversion-demo.surge.sh/"
        target="_blank"
        rel="noreferrer"
      >
        Live Website
      </a>
    </div>
  </div>
</div>

       {/* Project 5 – Innovis */}
<div className="project-card">
  <div className="project-content">
    <h3>Innovis – Corporate IT Services</h3>
    <p>
      A responsive corporate IT service profile website built to showcase
      technology solutions, business offerings, and company portfolio
      with smooth navigation.
    </p>
    <div className="tech-stack">
      <span>HTML</span>
      <span>CSS</span>
      <span>JavaScript</span>
      <span>Responsive Design</span>
    </div>
    <div className="project-links">
      <a
        href="https://innovis24.com/"
        target="_blank"
        rel="noreferrer"
      >
        Live Website
      </a>
    </div>
  </div>
</div>

      {/* Project 6 – Behance Portfolio */}
<div className="project-card">
  <div className="project-content">
    <h3>Behance Portfolio</h3>
    <p>
      Explore my creative portfolio featuring UI/UX designs, web design
      projects, responsive interfaces, branding concepts, and modern digital
      experiences published on Behance.
    </p>
    <div className="tech-stack">
      <span>Figma</span>
      <span>UI/UX</span>
      <span>Web Design</span>
      <span>Branding</span>
    </div>
    <div className="project-links">
      <a
        href="https://www.behance.net/nanthakumaran"
        target="_blank"
        rel="noreferrer"
      >
        View on Behance
      </a>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}

export default Projects;

