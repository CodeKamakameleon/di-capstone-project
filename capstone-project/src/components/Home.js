import { Banner } from "./Banner";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="section-1">
        <h3 className="section-header">Sean Chun</h3>
        <div className="section-body">
          Sean Chun is a traditionally trained native Hawaiian cultural
          practitioner. He practices multiple traditional healing arts including
          ho`oponopono (conflict resolution), la`au lapa`au (plant medicine),
          and lomilomi (massage).
        </div>
      </div>
      <div className="section-2">
        <div className="section-header">Traditional Healing</div>
        <div className="section-body">
          Traditional Hawaiian healing involves a wholistic approach to treating
          ailments. It is believed that spiritual and emotional ailments can
          manifest in the physical body, so physical treatment is often planned
          and paired with spiritual and emotional cleansing and prayer.
        </div>
      </div>
      <Footer />
    </div>
  );
};
