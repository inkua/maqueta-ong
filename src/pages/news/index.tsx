import Link from "next/link";
import useContextData from "hooks/useContextData";
import Hero from "@Component/Hero";
import Slide from "@Component/Slide";
import BtnReadMore from "@Component/Button";
import styles from "./news.module.css";

const News = () => {
  const dataNewsPage = useContextData().pages.news;
  const { dataHero, dataSlides } = dataNewsPage;

  return (
    <>
      <Hero data={dataHero} />
      <section className='sections-container'>
        <div className={styles.news__collaborate}>
          <h3 className={styles.collaborate__title}>You can collaborate here</h3>
          <Link href='/donate' className={`${styles.collaborate__link} bg-button button-transition`}>
            DONATE NOW
          </Link>
        </div>
        {
          dataSlides.map((slide) => (
            <Slide
              key={slide.title}
              data={slide.dataCards}
              height={slide.heightSlide}
              title={slide.title}
              widthCard={slide?.widthCards}
            />
          ))
        }
        <BtnReadMore title="Read more" url="/news" />
      </section>
    </>
  )
}

export default News;
