import React from 'react';
import Image from 'next/image';
import useContextData from 'hooks/useContextData';
import Hero from '@Component/Hero';
import styles from './contactUs.module.css';

const ContactUs = () => {
  const dataContactUsPage = useContextData().pages.contactUs;
  const { dataHero, getInTouchTitle, getInTouchDescription, contactMethods } = dataContactUsPage;

  return (
    <>
      <Hero data={dataHero} />

      <section className={styles['contact-us-section']}>
        <h2>{getInTouchTitle}</h2>
        <p>{getInTouchDescription}</p>

        <div className={styles['contact-methods']}>
          {contactMethods.map((method) => (
            <div key={method.title} className={styles['contact-method']}>
              <Image src={method.icon} alt={method.title} width={40} height={40} />
              <div className={styles['method-info']}>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ContactUs;




