import Hero from "@Component/Hero";
import Slide from "@Component/Slide";
import BtnReadMore from "@Component/Button";
import DATA from "data/ong";
import styles from './index/index.module.css'

const HomePage = () => {
  const dataAboutUs = DATA.pages.indexPage.aboutUs;
  const dataHero = DATA.pages.indexPage.dataHero;
  const dataSlides = DATA.pages.indexPage.dataSlides;

  return (
    <>
      <Hero data={dataHero} />
      <section className='sections-slides'>
        <article className={styles.article__about_us}>
          <h2 className={styles.title__about_us}>{dataAboutUs.title}</h2>
          <div className={styles.paragraphs__about_us}>
            <p>{dataAboutUs.paragraphOne}</p>
            <p>{dataAboutUs.paragraphTwo}</p>
          </div>
          <BtnReadMore title="Read more" showArrow={false} />
        </article>
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
      </section>
    </>
  );
};

export default HomePage;
