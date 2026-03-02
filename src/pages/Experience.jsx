import "./Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">
      {/* HEADER */}
      <div className="exp-header">
        <h2>Experience</h2>
        <span>(02)</span>
      </div>

      <hr className="exp-line" />

      {/* EXPERIENCE LIST */}
      <div className="exp-list">

        {/* ITEM 1 */}
        <div className="exp-item">
          <div className="exp-left">
            <h3>2025 – Present</h3>
            <p>ReactJs Developer</p>
          </div>

          <div className="exp-middle">
            <span className="dot active"></span>
            <div className="line"></div>
          </div>

          <div className="exp-right">
            <h4>Homewala.com</h4>
            <small>Full-time</small>
            <p>
  Working on a real estate platform using HTML, CSS,
  JavaScript, and React.js.
  Developed and maintained features using PHP Laravel,
  MySQL, and XAMPP, handled database operations using
  MySQL Workbench, improved UI usability, enhanced
  SEO performance, and increased lead generation
  through user-friendly design improvements.
</p>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="exp-item">
          <div className="exp-left">
            <h3>2024 – 2025</h3>
            <p>Web Designer </p>
          </div>

          <div className="exp-middle">
            <span className="dot"></span>
            <div className="line"></div>
          </div>

          <div className="exp-right">
            <h4>Innovias24</h4>
            <small>Full-time</small>
           <p>
  Designed and developed responsive websites using HTML,
  CSS, JavaScript, and React.js.
  Created UI layouts and wireframes using Figma,
  applied UI/UX principles, and handled basic backend
  concepts using PHP and SQL with XAMPP.
</p>
          </div>
        </div>

        {/* ITEM 3 */}
        <div className="exp-item">
          <div className="exp-left">
            <h3>2024</h3>
            <p>UI Ux Course </p>
          </div>

          <div className="exp-middle">
            <span className="dot"></span>
          </div>

          <div className="exp-right">
            <h4>Pumo Technovation</h4>
            <small>certificate course</small>
           <p>
  Learned UI/UX fundamentals including design principles,
  wireframing, and user-centered design.
  Worked with tools such as Figma, Adobe Photoshop,
  Illustrator, Adobe XD, and Balsamiq to create wireframes
  and UI designs.
</p>
          </div>
        </div>
         {/* ITEM 4 */}
<div className="exp-item">
          <div className="exp-left">
            <h3>2023</h3>
            <p>Web Developer (Internship)</p>
          </div>

          <div className="exp-middle">
            <span className="dot"></span>
          </div>

          <div className="exp-right">
            <h4>Pcs Software Solutions</h4>
            <small>Internship</small>
            <p>
  Learned the basics of HTML, CSS, and fundamentals.
  Worked on simple web pages to understand layout, styling,
  and basic interactivity.
</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;