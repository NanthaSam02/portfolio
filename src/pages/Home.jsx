import "./Home.css";
import profile from "../assets/profile.jpg";
import resumePDF from "../assets/Nanthakumaran_Resume.pdf";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-left">
        <h1>Hi, I'm Nanthakumaran 👋</h1>
        <h3>Software Developer</h3>
        <p>
          I Design and Develop modern, responsive,User Friendly websites and Web Applications with high-quality code.
        </p>
       <a
  href="/resume.pdf"
  download="Nanthakumaran_Resume.pdf"
  className="cv-btn"
>
  Download CV
</a>
      </div>

      <div className="home-right">
        <img src={profile} alt="Profile" />
      </div>
    </section>
  );
}

export default Home;