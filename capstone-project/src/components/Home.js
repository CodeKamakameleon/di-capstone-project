import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import homePic from "../images/homePic.JPG";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="section-1">
        <div className="section-1-left">
          <h3 className="section-header">Sean Chun</h3>
          <div className="section-body">
            Sean Chun is a traditionally trained native Hawaiian cultural
            practitioner. He practices multiple traditional healing arts
            including ho`oponopono (conflict resolution), la`au lapa`au (plant
            medicine), and lomilomi (massage). He is also the po`o of the Kaua`i
            Kupuna Council of Traditional Hawaiian Healing Arts and sit on the
            `Aha Kukakuka Ho`oponopono Board.
          </div>
        </div>

        <div className="section-1-right">
          <iframe
            width="450"
            height="305"
            src="https://www.youtube.com/embed/CgVrCkRdbK4"
            title="YouTube video player"
            // frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            // allowfullscreen
          ></iframe>
        </div>
      </div>

      <div className="section-2">
        <div className="section-2-left">
          <img src={homePic} alt="homePic" className="home-pic" />
        </div>

        <div className="section-2-right">
          <h3 className="section-header">Traditional Healing</h3>
          <div className="section-body">
            Traditional Hawaiian healing involves a wholistic approach to
            treating ailments. It is believed that spiritual and emotional
            ailments can manifest in the physical body, so physical treatment is
            often planned and paired with spiritual and emotional cleansing and
            prayer. The Pihana Ka Ikena mission is to address the various
            health, social, and economic disparities afflicting Native Hawaiians
            through education of Hawaiian cultural practices.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
