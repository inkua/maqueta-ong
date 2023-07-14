import { useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './cardslide.module.css';
import PropTypes from 'prop-types';
import useWindowSize from 'hooks/useWindowSize';

type DataCard = {
  data: CardProps; // type CarProps is in the file "index.d.ts" because it's needed in other file
  widthCard: number;
}

// this card adapts to all that we need in various components
const CardSlide = ({ data, widthCard = 327 } : DataCard) => {
  const windowWidth = useWindowSize();
  const imageRef = useRef<HTMLImageElement>();
  const {
    image,
    title,
    description,
    buttonArrow = false,
    buttonMore = false
  } = data;

  const isDesktop = windowWidth > 940;

  //effect to set the width style to the width of the image depending on the size of the device.
  useEffect(() => {
    const imageCurrent = imageRef.current;
    if(isDesktop) {
      imageCurrent.style.width = `${widthCard}px`;
      return;
    }
    imageCurrent.style.width = '200px';
  }, [isDesktop, widthCard]);

  return (
    <div className={styles.card}>
      <Image
        ref={imageRef}
        width={widthCard}
        height={327}
        className={`${styles.card__image} ${description && styles['card__image--with-description']}`}
        src={image}
        alt={`Card ${title || description}`}
        priority
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
    </div>
  );
};

CardSlide.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    widthCard: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    buttonArrow: PropTypes.bool,
    buttonMore: PropTypes.bool,
  }).isRequired,
};

export default CardSlide;
