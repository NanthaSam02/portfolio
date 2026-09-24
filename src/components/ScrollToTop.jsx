import { useEffect, useState } from "react";
import "./ScrollToTop.css";

function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToProjects = () => {
    const projectSection = document.getElementById("projects");
    if (projectSection) {
      projectSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {show && (
        <div className="floating-container">
          <button className="floating-projects-btn" onClick={scrollToProjects}>
            Projects
          </button>
          <button className="floating-top-btn" onClick={scrollTop} title="Scroll to top">
            ↑
          </button>
        </div>
      )}
    </>
  );
}

export default ScrollToTop;