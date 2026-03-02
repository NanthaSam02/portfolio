import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
 <div class="skills-header">
  <h2> <span></span>  Skills</h2>
  <span class="skills-count">(03)</span>
</div>
<div class="section-divider"></div> 
      <div className="skills-grid">
        {/* Frontend */}
        <div className="skill-card">React.js</div>
        <div className="skill-card">JavaScript</div>
        <div className="skill-card">HTML5</div>
        <div className="skill-card">CSS3</div>
        <div className="skill-card">Bootstrap</div>
        <div className="skill-card">Tailwind CSS</div>

        {/* Backend */}
        <div className="skill-card">PHP</div>
        <div className="skill-card">Laravel</div>
        <div className="skill-card">MySQL</div>

        {/* UI / UX & Design */}
        <div className="skill-card">Figma</div>
        <div className="skill-card">Adobe Photoshop</div>
        <div className="skill-card">Adobe XD</div>
        <div className="skill-card">Illustrator</div>
       
        <div className="skill-card">Wireframing</div>
        <div className="skill-card">Layout Design</div>

        {/* CMS & SEO */}
        <div className="skill-card">WordPress</div>
        <div className="skill-card">SEO</div>

        {/* Tools */}
        <div className="skill-card">Git & GitHub</div>
<div className="skill-card">Wireframe</div>
<div className="skill-card">NuxtJs</div>
      
      </div>
    </section>
  );
}

export default Skills;