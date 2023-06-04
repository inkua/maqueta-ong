import Hero from "@Component/Hero";
import DATA from "data/ong";
import Accordion from "@Component/Accordion";

const tips = DATA.pages.donatePage.accordions;

const Donate = () => {
  return (
    <>
      <Hero data={DATA.pages.donatePage.donateHero} />

      <section className="container">
        <h2 className="p-5 my-5">Follow up our guide</h2>
      </section>

      <section className="container d-flex flex-column">

        <section className="w-100 d-flex flex-xl-row flex-md-row flex-column flex-sm-column justify-content-between px-5 mt-5">
          <div className="w-50 px-5">
            <p className="w-75 fw-bold p-2 border border-dark border-2 rounded text-center fs-4">HOW TO DONATE?</p>
          </div>

          <div className="w-50 px-5">
            {
              tips.map((tip) => (
                <Accordion key={tip.title} data={tip} />
              ))
            }
          </div>
        </section>

        <section className="w-100 d-flex flex-row justify-content-between px-5 my-5 py-5">
        <div className="w-50 px-5">
            <p className="w-75 fw-bold p-2 border border-dark border-2 rounded text-center fs-4">DO'S</p>
          </div>

          <div className="w-50 px-5">
            {
              tips.map((tip) => (
                <Accordion key={tip.title} data={tip} />
              ))
            }
          </div>
        </section>

        <section className="w-100 d-flex flex-row justify-content-between px-5 mb-5 pb-5">
        <div className="w-50 px-5">
            <p className="w-75 fw-bold p-2 border border-dark border-2 rounded text-center fs-4">DON'T</p>
          </div>

          <div className="w-50 px-5">
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
