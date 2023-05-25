import Image from 'next/image';
import styles from './cardslide.module.css';

type DataCard = {
  data: CardProps; // type CarProps is in the file "index.d.ts" because it's needed in other file
}

// this card adapts to all that we need in various components
const CardSlide: React.FC<DataCard> = ({ data }) => {
  const {
    image,
    widthImage = 327,
    title,
    description,
    buttonArrow = false,
    buttonMore = false
  } = data;

  return (
    <div className={styles.card}>
      <Image
        width={widthImage}
        height={327}
        className={`${styles.card__image} ${description && styles['card__image--with-description']}`}
        src={image}
        alt={`Card ${title || description}`}
      />
      {title &&
        <div className={`${styles.card__title} ${!buttonArrow && styles['card__title-degradient']}`}>
          <h3 className={styles.title__content}>{title}</h3>
          {buttonArrow &&
            <button className={`${styles['card__button--arrow']} button-transition`} type='button'>
              &#129130;
            </button>}
        </div>}
      {description &&
        <div className={styles.card__description}>
          <p className={styles.description__content}>{description}</p>
          {/*so that the two buttons do not appear at the same time, I make a validation
            that shows me a button only in case the other is with the value of false*/}
          {buttonMore && !buttonArrow &&
            <button type='button' title='More' className={`${styles['card__button--more']} button-transition`} />}
        </div>}

      <style jsx global>{`
        :root {
          --image-width: ${widthImage}px;
        }
      `}
      </style>
    </div>
  );
};

export default CardSlide;
