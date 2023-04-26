import Image from 'next/image';
import styles from './footer.module.css';
import logo_facebook from 'assets/facebook-logo.png';
import logo_instagram from 'assets/instagram-logo.png';
import logo_whatsapp from 'assets/whatsApp-logo.png';
import Link from 'next/link';
import DATA from 'data/ong';
const Footer = () => {
  return (
    <footer className={`${styles.footer} bg-gray`}>
      <h3 className={styles.footer__title}>{DATA.name}</h3>
      <Image src={DATA.logo} width={86} height={84} alt='Logo' className={`${styles['footer__logo-mobile']} bg-black-primary`} />
      <div className={styles.footer__socialmedia}>
        <Link href='/' className={styles.socialmedia__link}>
          <Image src={logo_whatsapp} alt="WhatsApp logo" className={styles.socialmedia__icon} />
          <span className={styles.socialmedia__text}>WhatsApp</span>
        </Link>
        <Link href='/' className={styles.socialmedia__link}>
          <Image src={logo_instagram} alt="Instagram logo" className={styles.socialmedia__icon} />
          <span className={styles.socialmedia__text}>Instagram</span>
        </Link>
        <Link href='/' className={styles.socialmedia__link}>
          <Image src={logo_facebook} alt="Facebook logo" className={styles.socialmedia__icon} />
          <span className={styles.socialmedia__text}>Facebook</span>
        </Link>
      </div>
      <div className={styles.footer__diviser}></div>
      <div className={styles.footer__buttons}>
        <Image src={DATA.logo} width={86} height={84} alt='Logo' className={`${styles['footer__logo-desktop']} bg-black-primary`} />
        <div className={styles.divider__buttons}>
          <button className={`${styles.footer__button} ${styles.button__help}`}>Get Help</button>
          <button className={`${styles.footer__button} ${styles.button__donate}`}>Donate</button>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
