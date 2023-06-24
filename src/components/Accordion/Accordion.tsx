import { useState } from 'react';
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

  const toggleAccordion = () => {
    setOpen(!open);
  };

  return (
    <div className={styles.accordion}>
      <h3
        className={`${styles.accordion__title} ${open && styles['accordion__title-active']}`}
        onClick={toggleAccordion}
      >
          {title}
      </h3>
      <div
        className={styles.content__description}
        style={{
          maxHeight: open ? '300px' : '0',
          opacity: open ? '1' : '0',
        }}
      >
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default Accordion;
