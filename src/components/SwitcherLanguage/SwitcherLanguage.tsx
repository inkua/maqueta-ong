import styles from './SwitcherLanguage.module.css'

type SwitchProps = {
  languages: string[];
}

// eslint-disable-next-line react/prop-types
const SwitcherLanguage: React.FC<SwitchProps> = ({ languages }) => {
  return (
    <div className={styles.switcher}>
      <input id="switch" className={styles.switcher__input} type="checkbox" />
      <label htmlFor="switch" className={styles.switcher__label}>
        <span className={`${styles.switcher__text} ${styles['switcher__text--lang1']}`}>
          {languages[0]}
        </span>
        <span className={`${styles.switcher__text} ${styles['switcher__text--lang2']}`}>
          {languages[1]}
        </span>
      </label>
    </div>
  )
}

export default SwitcherLanguage
