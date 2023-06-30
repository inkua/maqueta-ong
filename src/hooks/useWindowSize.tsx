import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); // Limpia el listener
    };
  }, []);

  return windowWidth;
};

export default useWindowSize;
