import Link from "next/link";
import Hero from "@Component/Hero";
import Slide from "@Component/Slide";
import BtnReadMore from "@Component/Button";
import DATA from "data/ong";
import styles from "./news.module.css";

const News = () => {
  //object of test
  const dataHero = DATA.pages.news.dataHero;
  const dataSlides = DATA.pages.news.dataSlides;

  return (
    <>
      <Hero data={dataHero} />
      <section className='sections-slides'>
        <div className={styles.news__collaborate}>
          <h3 className={styles.collaborate__title}>You can collaborate here</h3>
          <Link href='/donate' className={`${styles.collaborate__link} bg-button button-transition`}>
            DONATE NOW
          </Link>
        </div>
        {
          dataSlides.map((slide) => (
            <article key={slide.title}>
              <Slide
                data={slide.dataCards}
                height={slide.heightSlide}
                title={slide.title}
                widthCard={slide?.widthCards}
              />
            </article>
          ))
        }
        <BtnReadMore title="Read more" />
      </section>
    </>
  )
}

export default News;
