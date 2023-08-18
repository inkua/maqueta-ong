import CardSlide from '@Component/CardSlide';
import styles from './slide.module.css';
import useWindowSize from 'hooks/useWindowSize';
import { useEffect, useRef } from 'react';

type SlideProps = {
  data: CardProps[]; // data that the card component needs
  title: string; // section title
  widthCard?: number; //width of cards, all cards keep the same width
  height?: string; // optional slide height
}

const Slide = ({ data, title, widthCard, height = '300px' }: SlideProps) => {
  const windowWidth = useWindowSize();
  const sectionRef = useRef<HTMLImageElement>();

  const isDesktop = windowWidth > 940;

  //effect to set the width style to the width of the image depending on the size of the device.
  useEffect(() => {
    const sectionCurrent = sectionRef.current;
    if (isDesktop) {
      sectionCurrent.style.height = `${height}`;
      return;
    }
    sectionCurrent.style.height = '200px';
  }, [isDesktop, height]);

  return (
    <article>
      <h2 className={styles.slide__title}>{title}</h2>
      <div
        ref={sectionRef}
        className={`${styles.slide} ${isDesktop && data.length <= 3 && styles['content-center']}`}
      >
        {data.map(data => (
          <CardSlide data={data} widthCard={widthCard} key={data.id} />
        ))}
      </div>
    </article>
  );
};

export default Slide;
