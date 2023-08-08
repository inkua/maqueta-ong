import Image from 'next/image';
import useContextData from 'hooks/useContextData';
import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
  const { logo, name, socialMedia } = useContextData();

  return (
    <footer className={`${styles.footer} bg-color-primary`}>
      <h3 className={styles.footer__title}>{name}</h3>
      <Image src={logo} width={86} height={84} alt='Logo' className={`${styles['footer__logo-mobile']} bg-black-primary`} />
      <div className={styles.footer__socialmedia}>
        {
          socialMedia.map((platform) => (
            <Link key={platform.name} href={platform.link} className={styles.socialmedia__link} target='_blank'>
              <Image
                src={platform.logo}
                alt={platform.name}
                width={35}
                height={35}
                className={styles.socialmedia__icon}
              />
              <span className={styles.socialmedia__text}>{platform.name}</span>
            </Link>
          ))
        }
      </div>
      <div className={styles.footer__diviser}></div>
      <div className={styles.footer__buttons}>
        <Image src={logo} width={86} height={84} alt='Logo' className={`${styles['footer__logo-desktop']} bg-black-primary`} />
        <div className={styles.divider__buttons}>
          <button className={`${styles.footer__button} button__help button-transition`}>Get Help</button>
          <button className={`${styles.footer__button} button__donate button-transition`}>Donate</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
