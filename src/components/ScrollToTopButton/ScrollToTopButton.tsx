import React, { useState, useEffect } from 'react';
import styles from './ScrollToTopButton.module.css';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 100); // Show the button when scrolling is greater than 100px
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`${styles.scrollToTopButton} ${isVisible ? styles.visible : ''}`}
      onClick={scrollToTop}
      type='button'
    >
      &#129129;
    </button>
  );
};

export default ScrollToTopButton;
