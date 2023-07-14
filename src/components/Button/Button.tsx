import styles from './Button.module.css';

type PropBtnReadMore = {
  title: string;
  showArrow?: boolean;
  typeArrow?: string;
}

const BtnReadMore = ({ title, showArrow = true, typeArrow = '\u{1F86B}' }: PropBtnReadMore) => (
  <button type="button" className={`${styles.read__more} button-transition`}>
    {title} {showArrow && <span className={styles['read__more-arrow']}>{typeArrow}</span>}
  </button>
)

export default BtnReadMore;
