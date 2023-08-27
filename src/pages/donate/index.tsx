import useContextData from "hooks/useContextData";
import Hero from "@Component/Hero";
import Accordion from "@Component/Accordion";
import styles from './donate.module.css';

const Donate = () => {
  const dataDonate = useContextData().pages.donate;
  const { dataHero, guideToDonate } = dataDonate;

  return (
    <>
      <Hero data={dataHero} />
      <div className={styles.container__sections}>
        {guideToDonate.map((item) => (
          <section key={item.title} className={styles.guide__section}>
            <h3 className={styles.guide__title}>{item.title}</h3>
            <div className={styles.guide__articles}>
              {item.tips.map((tip) => (
                <Accordion key={tip.title} data={tip} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}

export default Donate
