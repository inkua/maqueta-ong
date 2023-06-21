import Hero from "@Component/Hero"
import Slide from "@Component/Slide"
import DATA from "data/ong"
import styles from "./news.module.css"
import Link from "next/link"

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
        <button type="button" className={`${styles.read__more} button-transition`}>
          Read more <span className={styles['read__more-arrow']}>&#129131;</span>
        </button>
      </section>
    </>
  )
}

export default News
