import Image, { StaticImageData } from 'next/image';
import styles from './hero.module.css';
import Link from 'next/link';

/* Props that the hero needs. If the "urlVideo" property is detected,
putting the video is prioritized, but the "urlImage" property is still
mandatory in case an empty video url is sent and an image is displayed. */
type PropsHero = {
  data: {
    title: string;
    description: string;
    linkContent: string; //this prop has the content of the link button
    linkAction: string //this prop has link button action
    fillLinkButton?: boolean;
    urlImage: string | StaticImageData;
    urlVideo?: string;
  }
}

const Hero = ({ data }: PropsHero) => {
  const {
    title,
    description,
    linkContent,
    linkAction,
    fillLinkButton = false,
    urlImage,
    urlVideo
  } = data;

  return (
    urlVideo ?
      <iframe
        width="100%"
        height="100%"
        src={urlVideo}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className={styles.hero__video}
        allowFullScreen
        >
      </iframe>
      :
    <section className={styles.hero}>
      <Image src={urlImage} alt={title} className={styles.hero__img} priority />
      <div className={`${styles.hero__content}`}>
        <h2 className={styles.hero__title}>{title}</h2>
        <p className={styles.hero__description}>{description}</p>
        <Link
          scroll={false}
          href={linkAction}
          className={`${styles['hero__link-button']} button-transition
                      ${fillLinkButton ? styles['link__button-fill'] : styles['link__button-border']}
                      ${linkContent.length <= 10 && styles['text__uppercase']}`}>
            {linkContent}
        </Link>
      </div>
      <div className={styles.buttons__lang}>
        <button type='button' className={styles['hero__button-en']}>EN</button>
        <button type='button' className={styles['hero__button-ykp']}>YKP</button>
      </div>
      <div className={styles.hero__degradient}></div>
    </section>
  )
}

export default Hero
