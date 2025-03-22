import { useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Navbar } from 'components';
import './Header.css';

export const Header = () => {
  let navigate = useNavigate();

  return (
    <header className='header center'>
      <a href={'/'} className='link link--icon'>
        <FontAwesomeIcon icon={faHome} onClick={() => navigate('/')} size='2x' />
      </a>
      <Navbar />
    </header>
  );
};
