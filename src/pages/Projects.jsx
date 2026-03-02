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
              <a href="#" target="_blank" rel="noreferrer">GitHub</a>
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
              <a href="#" target="_blank" rel="noreferrer">Live</a>
              <a href="#" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>

        {/* Project 4 – Office Website */}
        <div className="project-card">
          
          <div className="project-content">
            <h3>Ofs Website</h3>
            <p>
              Designed and developed a professional business website focused on
              branding, responsiveness, and basic SEO optimization.
            </p>
            <div className="tech-stack">
              <span>ReactJS</span>
              <span>CSS</span>
            </div>
            <div className="project-links">
              <a href="#" target="_blank" rel="noreferrer">Live</a>
            </div>
          </div>
        </div>

        {/* Project 5 – UI/UX Design */}
        <div className="project-card">
          
          <div className="project-content">
            <h3>Teashop Design</h3>
            <p>
              A UI/UX design project focused on user flow, wireframing,
              and clean visual design.
            </p>
            <div className="tech-stack">
              <span>Photoshop</span>
              <span>Illustrator</span>
              <span>Canva</span>
            </div>
            <div className="project-links">
  <a
    href="https://www.behance.net/gallery/220789967/Teashop-Design"
    target="_blank"
    rel="noreferrer"
  >
    View on Behance
  </a>
</div>
          </div>
        </div>

        {/* Project 6 – Graphic / Web Design */}
        <div className="project-card">
         
          <div className="project-content">
            <h3>Nika Fashion Jewellery</h3>
            <p>
              A collection of web and graphic design works created using modern
              design tools with a focus on layout and usability.
            </p>
            <div className="tech-stack">
              <span>Photoshop</span>
              <span>Illustrator</span>
              <span>Canva</span>
            </div>
            <div className="project-links">
  <a
    href="https://www.behance.net/gallery/222384807/Nika-Fashion-Jewellery"
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