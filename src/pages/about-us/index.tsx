import Image from 'next/image';
import Card from '@Component/Card/Card';
import Hero from '@Component/Hero';
import Slide from '@Component/Slide';
import BtnUkraineNow from '@Component/Button';
import DATA from 'data/ong';
import styles from './about_us.module.css';

const AboutUs = () => {
  const dataHero = DATA.pages.aboutUs.dataHero;
  const dataOurHistory = DATA.pages.aboutUs.ourHistory;
  const dataDiviser = DATA.pages.aboutUs.diviser;
  const dataSlide = DATA.pages.aboutUs.dataSlide;
  const formattedDescription = dataOurHistory.description?.replace(/\n/g, '<br />');

  return (
    <>
      <Hero data={dataHero} />
      <section className='sections-container'>
        <article className='article'>
          <h2 className='article-title'>{dataOurHistory.title}</h2>
          <p
            className={`article-description ${styles.align__paragraph}`}
            dangerouslySetInnerHTML={{__html: formattedDescription}}>
          </p>
          <section className={`article-section ${styles.section__history}`}>
            {
              dataOurHistory.cards.map((card) => (
                <Card key={card.title} title={card.title} description={card.description} />
              ))
            }
          </section>
        </article>
        <article className={styles.diviser}>
          <div className={styles['diviser__degradient-start']}></div>
          <Image
            className={styles.diviser__image}
            height={328}
            src={dataDiviser.image}
            alt={dataDiviser.description}
          />
          <p className={styles.diviser__description}>{dataDiviser.description}</p>
          <div className={styles['diviser__degradient-end']}></div>
        </article>
        <Slide
          data={dataSlide.dataCards}
          height={dataSlide.heightSlide}
          title={dataSlide.title}
          widthCard={dataSlide?.widthCards}
        />
        <BtnUkraineNow title='Ukraine now' url='/about-us' typeArrow={'\u{1F86A}'} />
      </section>
    </>
  )
}

export default AboutUs
