import Link from 'next/link';
import styles from './Button.module.css';

type PropButton = {
  title: string;
  url: string;
  showArrow?: boolean;
  typeArrow?: string;
}

const Button = (props: PropButton) => {
  const {
    title,
    url = '/',
    showArrow = true,
    typeArrow = '\u{1F86B}'} = props;

  return (
    <Link href={url} className={`${styles.button} button-transition`}>
      {title} {showArrow && <span className={styles['button-arrow']}>{typeArrow}</span>}
    </Link>
  )
}

export default Button;
