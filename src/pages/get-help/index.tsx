import Accordion from "@Component/Accordion";
import Hero from "@Component/Hero";
import DATA from 'data/ong';
import styles from './getHelp.module.css';

const GetHelp = () => {
  //data for tests
  const dataHero = DATA.pages.getHelp.dataHero;
  const data = DATA.pages.getHelp.accordions;

  return (
    <>
      <Hero data={dataHero} />
      <section className={styles.accordions}>
        {data.map((item) => (
          <Accordion key={item.title} data={item} />
        ))}
      </section>
    </>
  )
}

export default GetHelp;
