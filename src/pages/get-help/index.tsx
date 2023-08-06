import Accordion from "@Component/Accordion";
import useContextData from "hooks/useContextData";
import Hero from "@Component/Hero";
import styles from './getHelp.module.css';

const GetHelp = () => {
  const dataGetHelpPage = useContextData().pages.getHelp;
  const { dataHero, dataAccordions } = dataGetHelpPage;

  return (
    <>
      <Hero data={dataHero} />
      <section className={styles.accordions}>
        {dataAccordions.map((item) => (
          <Accordion key={item.title} data={item} />
        ))}
      </section>
    </>
  )
}

export default GetHelp;
