import { Link } from 'react-router-dom';

import styles from './menu.module.css';
import './menu.css';

import { Fragment, useState } from 'react';

export default ({ isOpen, close }) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const onClickHandler = ({isOpen}) => {
  //   console.log('OnClick: ', !isOpen);
  //   setIsOpen(!isOpen);
  // };

  return (
    <div>
      <nav id={isOpen ? 'menuOpen' : 'menu'}>
        <img src='/close.svg' class='close' onClick={close}></img>
        <h2>Menu</h2>
        <ul className='list'>
          <li>
            <Link to='/'>Home</Link>
            {/* <a href='index.html'>Home</a> */}
          </li>
          <li>
            <Link to='/project-iro'>Iro</Link>
            {/* <a href='Iro.html'>Iro</a> */}
          </li>
          <li>
            <a href='Leonardo.html'>Leonardo</a>
          </li>
          <li>
            <a href='Lamora.html'>Lamora</a>
          </li>
          <li>
            <a href='Nagata.html'>Nagata</a>
          </li>
          <li>
            <a href='Kira.html'>Kira</a>
          </li>
          <li>
            <a href='Dinah.html'>Dinah</a>
          </li>
          <li>
            <a href='Bookshelf.html'>My Bookshelf</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
