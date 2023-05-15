import Hero from "@Component/Hero";
import DATA from "data/ong";
import img_index from 'assets/img-index.png';

const HomePage = () => {
  //object of test
  const data = {
    title: DATA.name,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor',
    buttonContent: 'Donate now',
    fillButton: true,
    urlImage: img_index,
  }

  return (
    <div>
      <Hero data={data} />
    </div>
  );
};

export default HomePage;
