import Hero from "@Component/Hero";
import DATA from "data/ong";
import Accordion from "@Component/Accordion";
import style from "./donate.module.css";

const tips = DATA.pages.donatePage.accordions;

const Donate = () => {
  return (
    <>
      <Hero data={DATA.pages.donatePage.donateHero} />

      <section className="container">
        <h2 className="p-5 my-5">Follow up our guide</h2>
      </section>

      <section className="container d-flex flex-column">

        <section className={`${style.body_card}`}>
          <div className={`${style.title_card}`}>
            <p className={`${style.title}`}>HOW TO DONATE?</p>
          </div>

          <div className={`${style.text_card}`}>
            {
              tips.map((tip) => (
                <Accordion key={tip.title} data={tip} />
              ))
            }
          </div>
        </section>

        <section className={`${style.body_card} my-5 py-5`}>
        <div className={`${style.title_card}`}>
            <p className={`${style.title}`}>DO'S</p>
          </div>

          <div className={`${style.text_card}`}>
            {
              tips.map((tip) => (
                <Accordion key={tip.title} data={tip} />
              ))
            }
          </div>
        </section>

        <section className={`${style.body_card} mb-5 pb-5`}>
        <div className={`${style.title_card}`}>
            <p className={`${style.title}`}>DON'T</p>
          </div>

          <div className={`${style.text_card}`}>
            {
              tips.map((tip) => (
                <Accordion key={tip.title} data={tip} />
              ))
            }
          </div>
        </section>

      </section>
    </>
  )
}

export default Donate
