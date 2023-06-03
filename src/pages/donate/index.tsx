import Hero from "@Component/Hero";
import DATA from "data/ong";
import Accordion from "@Component/Accordion";

const tips = DATA.pages.donatePage.accordions;

const Donate = () => {
  return (
    <>
      <Hero data={DATA.pages.donatePage.donateHero} />
      <section>
        <h2>Follow up our guide</h2>
      </section>

      <section>
        <div>
          <p>HOW TO DONATE</p>
        </div>

        <div>
          {
            tips.map((tip) => (
              <Accordion key={tip.title} data={tip} />
            ))
          }
        </div>
      </section>

      <section>
      <div>
          <p>DO'S</p>
        </div>

        <div>
          {
            tips.map((tip) => (
              <Accordion key={tip.title} data={tip} />
            ))
          }
        </div>
      </section>

      <section>
      <div>
          <p>DON'T</p>
        </div>

        <div>
          {
            tips.map((tip) => (
              <Accordion key={tip.title} data={tip} />
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Donate
