import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      {/* TOP TITLE */}
      <div className="about-header">
        <h2>About Me</h2>
        <span>(01)</span>
      </div>

      <hr className="about-line" />

      <div className="about-content">
        {/* LEFT DESIGN */}
        <div className="about-left">
          <div className="circle orange"></div>
          <div className="circle black"></div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-right">
          <p className="about-text">
            I’m Nanthakumaran, a Reactjs Developer with over 1+ year of hands-on
            experience in Designing and Developing real-world web applications.
            I work primarily with React.js for frontend development and have also
            worked with PHP Laravel on the backend, giving me a strong
            understanding of complete application flow. I enjoy building clean,
            scalable,Seo,User Friendly,Lead Generation and high-performance applications.
          </p>

          {/* STATS */}
          <div className="about-stats">
            <div>
              <h3>01+</h3>
              <span>Years of Experience</span>
            </div>
            <div>
              <h3>5+</h3>
              <span>Projects Completed</span>
            </div>
            <div>
              <h3>10+</h3>
              <span>Design Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;