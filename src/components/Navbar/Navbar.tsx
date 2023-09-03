import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useContextData from 'hooks/useContextData';
import SwitcherLanguage from '@Component/SwitcherLanguage';
import styles from './Navbar.module.css';
import useWindowSize from 'hooks/useWindowSize';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuList, setMenuList] = useState([]);
  const windowWidth = useWindowSize();
  const { logo, name, pages } = useContextData();
  const languages = ['EN', 'YKP'];
  const router = useRouter();

  //function to change the navbar state
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Style the <body> to lock the scroll
    if (windowWidth >= 640) {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }, [isMenuOpen, windowWidth]);

  //effect to validate if the pages exist in the DATA, if so, add them to the menu
  useEffect(() => {
    setMenuList([]);
    if (pages.hasOwnProperty('indexPage')) {
      setMenuList(menuList => [...menuList, { title: 'Home', url: '/' }]);
    }

    if (pages.hasOwnProperty('aboutUs')) {
      setMenuList(menuList => [...menuList, { title: 'About Us', url: '/about-us' }]);
    }

    if (pages.hasOwnProperty('news')) {
      setMenuList(menuList => [...menuList, { title: 'News', url: '/news' }]);
    }

    if (pages.hasOwnProperty('volunteer')) {
      setMenuList(menuList => [...menuList, { title: 'Volunteer', url: '/volunteer' }]);
    }
  }, [pages]);

  const isMobile = windowWidth < 640;

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.menu__toggle_logo}>
          <button
            type='button'
            className={`${styles.menu__toggle} ${isMenuOpen ? styles.open : ''}`}
            onClick={handleMenuToggle}
          >
            <span className={`${styles.menu__icon} ${isMenuOpen ? styles.open : ''}`}></span>
          </button>
          <Link href='/' className={styles.link__logo}>
            <Image src={logo} alt={name} width={100} height={50} className={styles.navbar__logo} />
          </Link>
        </div>
        <div className={styles.navbar__links}>
          <ul className={`${styles.navbar__menu} ${isMenuOpen ? styles.open : ''}`}>
            <h3 className={styles.menu__title}>Menu</h3>
            {menuList.map((item) => (
              <li key={item.url} className={styles.menu__item}>
                <Link
                  href={item.url}
                  className={`${styles.menu__link} ${
                    windowWidth >= 640 && router.asPath === item.url ? styles.active : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            {isMobile && (
              <li className={styles.menu__item}>
                <Link href='/contact-us' className={styles.menu__link} onClick={() => setIsMenuOpen(false)}>
                  Contact Us
                </Link>
              </li>
            )}
          </ul>
          <div className={styles.navbar__buttons}>
            <Link
              href="/get-help"
              className={`${styles.button__primary} button__help`}
              onClick={() => setIsMenuOpen(false)}
            >
              Get Help
            </Link>
            <Link
              href="/donate"
              className={`${styles.button__secondary} button__donate`}
              onClick={() => setIsMenuOpen(false)}
            >
              DONATE
            </Link>
          </div>
          <SwitcherLanguage languages={languages} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
