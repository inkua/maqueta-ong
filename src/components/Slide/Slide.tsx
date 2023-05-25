import CardSlide from '@Component/CardSlide';
import styles from './slide.module.css';

type SlideProps = {
  data: CardProps[]; // data that the card component needs
  title: string; // section title
  height?: string; // optional slide height
}

const Slide = ({data, title, height = '300px'}: SlideProps) => {
  return (
    <>
      <h2 className={styles.slide__title}>{title}</h2>
      <div className={styles.slide} >
        <CardSlide data={data[0]} />
        <CardSlide data={data[1]} />
        <CardSlide data={data[2]} />
        <CardSlide data={data[0]} />
        <CardSlide data={data[1]} />
        <CardSlide data={data[2]} />
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
