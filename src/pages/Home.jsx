import "./Home.css";
import profile from "../assets/profile.jpg";

function Home() {
  return (
   <section className="home" id="home">
      <div className="home-left">
        <h1>Hi, I'm Nanthakumaran 👋</h1>
        <h3>React Developer</h3>
        <p>
          I Design and Develop modern, responsive,User Friendly websites using React.js
        </p>
        <a
  href="/Nanthakumaran_Resume.pdf"
  download
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