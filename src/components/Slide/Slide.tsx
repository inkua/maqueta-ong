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
