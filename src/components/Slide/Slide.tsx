import CardSlide from '@Component/CardSlide';
import styles from './slide.module.css';
import useWindowSize from 'hooks/useWindowSize';

type SlideProps = {
  data: CardProps[]; // data that the card component needs
  title: string; // section title
  widthCard?: number; //width of cards, all cards keep the same width
  height?: string; // optional slide height
}

const Slide = ({ data, title, widthCard, height = '300px' }: SlideProps) => {
  const windowWidth = useWindowSize();

  const isDesktop = windowWidth > 1037;

  return (
    <>
      <h2 className={styles.slide__title}>{title}</h2>
      <div className={`${styles.slide} ${isDesktop && data.length <= 3 && styles['content-center']}`} >
        {data.map(data => (
          <CardSlide data={data} widthCard={widthCard} key={data.id} />
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
