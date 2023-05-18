import Hero from "@Component/Hero";
import Slide from "@Component/Slide";
import DATA from "data/ong";
import img_index from 'assets/img-index.png';

const HomePage = () => {
  //object of test
  const dataHero = {
    title: DATA.name,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor',
    buttonContent: 'Donate now',
    fillButton: true,
    urlImage: img_index,
  }

  const dataSlide = [
    {
      image: '',
      title: 'Titulo',
    },
    {
      image: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonMore: true,
    },
    {
      image: '',
      title: 'Titulo',
      buttonArrow: true,
    },
  ];

  return (
    <div>
      <Hero data={dataHero} />
      <section>
        <Slide data={dataSlide} height={'300px'} title="Our partners" />
      </section>
    </div>
  );
};

export default HomePage;
