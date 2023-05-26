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
      id: 1,
      image: '',
      title: 'Titulo 1',
      widthImage: 327,
    },
    {
      id: 2,
      image: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonMore: true,
      widthImage: 327,
    },
    {
      id: 3,
      image: '',
      title: 'Titulo 2',
      buttonArrow: true,
      widthImage: 327,
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
