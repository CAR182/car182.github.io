import './header.css';
import styles from './header.module.css';

import { Fragment, useState } from 'react';

export default ({ onClickHandler }) => {
  return (
    <header id='header'>
      {/* <div class='inner'> */}
      <nav onClick={onClickHandler}>
        <ul>
          <li>
            <span href=''>Menu</span>
          </li>
        </ul>
      </nav>
      {/* </div> */}
    </header>
  );
};
