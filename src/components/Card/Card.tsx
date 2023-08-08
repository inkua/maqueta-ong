import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

type CardProps = {
  title: string;
  description: string;
  widthCard?: string;
};

const Card = ({ title, description, widthCard = "500px" }: CardProps) => {
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const articleCurrent = articleRef.current;
    articleCurrent.style.maxWidth = widthCard;
  }, [widthCard])


  return (
    <article ref={articleRef} className={styles.card}>
      <h3 className={styles.card__title}>{title}</h3>
      <p className={styles.card__description}>{description}</p>
    </article>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
