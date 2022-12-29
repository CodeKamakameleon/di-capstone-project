import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const About = () => {
  return (
    <div>
      <Navbar />
      <header>ABOUT US</header>
      {/* Group picture */}

      <h3>Our Board</h3>

      <div className="board-section">
        <img />
        <h5>President</h5>
        <p>Sean Chun</p>
      </div>

      <div className="board-section">
        <img />
        <h5>Vice President</h5>
        <p>Maco Wai`ale`ale</p>
      </div>

      <div className="board-section">
        <img />
        <h5>Treasurer</h5>
        <p>Anna Peters</p>
      </div>

      <div className="board-section">
        <img />
        <h5>Secretary</h5>
        <p>Susan Oshiro-Taogoshi</p>
      </div>

      <Footer />
    </div>
  );
};
