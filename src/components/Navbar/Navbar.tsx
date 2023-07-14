import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import SwitcherLanguage from '@Component/SwitcherLanguage';
import DATA from 'data/ong';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuList, setMenuList] = useState([]);
  const { logo, name, pages } = DATA;
  const languages = ['EN', 'YKP'];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  //effect to validate if the pages exist in the DATA, if so, add them to the menu
  useEffect(() => {
    setMenuList([]);
    if (pages.hasOwnProperty('indexPage')) {
      setMenuList(menuList => [...menuList, {title: 'Home', url: '/'}]);
    }

    if (pages.hasOwnProperty('aboutUs')) {
      setMenuList(menuList => [...menuList, {title: 'About Us', url: '/about-us'}]);
    }

    if (pages.hasOwnProperty('news')) {
      setMenuList(menuList => [...menuList, {title: 'News', url: '/news'}]);
    }

    if (pages.hasOwnProperty('volunteer')) {
      setMenuList(menuList => [...menuList, {title: 'Volunteer', url: '/volunteer'}]);
    }
  }, [pages]);


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
          <Image src={logo} alt={name} width={100} height={50} className={styles.navbar__logo} />
        </div>
        <div className={styles.navbar__links}>
          <ul className={`${styles.navbar__menu} ${isMenuOpen ? styles.open : ''}`}>
            <h3 className={styles.menu__title}>Menu</h3>
            {menuList.map((item) => (
              <li key={item.url} className={styles.menu__item}>
                <Link href={item.url} className={styles.menu__link} onClick={handleMenuToggle}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.navbar__buttons}>
            <Link href="/get-help" className={`${styles.button__primary} button__help`}>
              Get Help
            </Link>
            <Link href="/donate" className={`${styles.button__secondary} button__donate`}>
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
