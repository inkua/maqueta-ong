import { useEffect, useState } from 'react';
import CardSlide from '@Component/CardSlide';
import styles from './slide.module.css';

type SlideProps = {
  data: CardProps[]; // data that the card component needs
  title: string; // section title
  height?: string; // optional slide height
}

const Slide = ({ data, title, height = '300px' }: SlideProps) => {
  const [windowWidth, setWindowWidth] = useState(0);

  // Since Next.js works with the server, the "window" is not defined when the page is rendered.
  // Wait for the page to render and then assign the value of "window" to the state.
  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, [])

  const isDesktop = windowWidth > 1037;

  //effect to handle window size
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); //clean listener
    }
  }, []);

  return (
    <>
      <h2 className={styles.slide__title}>{title}</h2>
      <div className={`${styles.slide} ${isDesktop && data.length <= 3 && styles['content-center']}`} >
        {data.map(data => (
          <CardSlide data={data} key={data.id} />
        ))}
        <style jsx global>{`
        :root {
          --slide-height: ${height};
        }
      `}
        </style>
      </div>
    </>
  );
};

export default Slide;
