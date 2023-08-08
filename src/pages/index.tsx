import useContextData from "hooks/useContextData";
import Hero from "@Component/Hero";
import Slide from "@Component/Slide";
import BtnReadMore from "@Component/Button";
import styles from './index/index.module.css'

const HomePage = () => {
  const dataIndexPage = useContextData().pages.indexPage;
  const { dataAboutUs, dataHero, dataSlides } = dataIndexPage;

  return (
    <>
      <Hero data={dataHero} />
      <section className='sections-container'>
        <article className='article'>
          <h2 className='article-title'>{dataAboutUs.title}</h2>
          <div className={`article-section ${styles.align__paragraphs}`}>
            <p className="article-description">{dataAboutUs.paragraphOne}</p>
            <p className="article-description">{dataAboutUs.paragraphTwo}</p>
          </div>
          <BtnReadMore title="Read more" url="/about-us" showArrow={false} />
        </article>
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
      </section>
    </>
  );
};

export default HomePage;
