import Hero from "@Component/Hero";
import Slide from "@Component/Slide";
import DATA from "data/ong";

const HomePage = () => {
  const {
    dataCards,
    heightSlide,
    title,
    widthCards
  } = DATA.pages.indexPage.dataSlide;

  return (
    <div>
      <Hero data={DATA.pages.indexPage.dataHero} />
      <section>
        <Slide
          data={dataCards}
          title={title}
          widthCard={widthCards}
          height={heightSlide}
        />
      </section>
    </div>
  );
};

export default HomePage;
