import { useRef, useState } from 'react';
import styles from './accordion.module.css'

type PropsAccordion = {
  data: {
    title: string;
    description: string;
    isOpen?: boolean;
  }
}

const Accordion = ({ data: { title, description, isOpen = false } }: PropsAccordion) => {
  const [open, setOpen] = useState(isOpen);
  const descriptionRef = useRef(null);

  return (
    <div className={styles.accordion}>
      <h3 className={`${styles.accordion__title} ${open && styles['accordion__title-active']}`} onClick={() => setOpen(!open)}>{title}</h3>
      <p
        className={`${styles.accordion__description} ${open && styles['accordion__description-active']}`}
        ref={descriptionRef}>
          {open && description}
      </p>
    </div>
  )
}

export default Accordion
