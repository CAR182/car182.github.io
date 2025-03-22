import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './ScrollToTop.css';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => (window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false));

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return isVisible ? (
    <div className='scroll-top'>
      <a href='#top' aria-label='top'>
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </div>
  ) : null;
};

export default ScrollToTop;
