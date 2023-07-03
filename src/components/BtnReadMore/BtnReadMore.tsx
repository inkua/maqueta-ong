import styles from './BtnReadMore.module.css';

type PropBtnReadMore = {
  showArrow?: boolean;
}

const BtnReadMore = ({ showArrow = true }: PropBtnReadMore) => (
  <button type="button" className={`${styles.read__more} button-transition`}>
    Read more {showArrow && <span className={styles['read__more-arrow']}>&#129131;</span>}
  </button>
)

export default BtnReadMore;
