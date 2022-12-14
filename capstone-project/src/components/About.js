import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import aboutPic from "../images/kahili-banner.png";

export const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <header className="page-header">ABOUT US</header>
      {/* Group picture */}
      <img className="about-pic" src={aboutPic} alt="aboutPic" />

      <h3 className="section-header">Our Board</h3>

      <div className="board-section">
        <img />
        <h4>President</h4>
        <p>Sean Chun</p>
      </div>

      <div className="board-section">
        <img />
        <h4>Vice President</h4>
        <p>Maco Wai`ale`ale</p>
      </div>

      <div className="board-section">
        <img />
        <h4>Treasurer</h4>
        <p>Anna Peters</p>
      </div>

      <div className="board-section">
        <img />
        <h4>Secretary</h4>
        <p>Susan Oshiro-Taogoshi</p>
      </div>

      <Footer />
    </div>
  );
};
