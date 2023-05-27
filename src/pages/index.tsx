import Hero from "@Component/Hero";
import Slide from "@Component/Slide";
import DATA from "data/ong";

const HomePage = () => {
  return (
    <div>
      <Hero data={DATA.pages.indexPage.dataHero} />
      <section>
        <Slide data={DATA.pages.indexPage.dataSlide} height={'300px'} title="Our partners" />
      </section>
    </div>
  );
};

export default HomePage;
