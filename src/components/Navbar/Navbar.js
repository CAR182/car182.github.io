import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from 'contexts/theme';
import { projects, contact } from 'portfolio';

import './Navbar.css';

export const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext);
  const location = useLocation();

  const projectsLink = () => (location.pathname === '/' ? '#projects' : '/');
  const contactLink = () => (location.pathname === '/' ? '#contact' : '/');

  return (
    <nav className='center nav'>
      <ul className='nav__list'>
        {projects.length ? (
          <li className='nav__list-item'>
            <a href={projectsLink()} className='link link--nav'>
              Projects
            </a>
          </li>
        ) : null}

        {contact.email ? (
          <li className='nav__list-item'>
            <a href={contactLink()} className='link link--nav'>
              Contact
            </a>
          </li>
        ) : null}
      </ul>

      <button type='button' onClick={toggleTheme} className='btn btn--icon nav__theme' aria-label='toggle theme'>
        {themeName === 'dark' ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
      </button>
    </nav>
  );
};
