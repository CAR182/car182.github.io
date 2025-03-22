import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

import { contact } from 'portfolio';
import './ProjectHeader.css';
import { Fragment } from 'react';

export const ProjectHeader = ({ banner, source, live, reference: { name, title, link } }) => {
  return (
    <Fragment>
      <img className='projectHeader__img' src={banner} alt='' />
      <div className='projectHeader__info'>
        <div className='projectHeader__text'>
          <h4>
            Project Name: {name} -
            <a href={link} className='link link--icon'>
              {title}
            </a>
          </h4>
        </div>
        <div className='projectHeader__links'>
          {source && (
            <a href={source} aria-label='linkedin' className='projectHeader__link link link--icon'>
              <FontAwesomeIcon icon={faGithubSquare} size='2x' />
              <span>Source Code</span>
            </a>
          )}
          {live && (
            <a href={live} aria-label='linkedin' className='projectHeader__link link link--icon'>
              <FontAwesomeIcon icon={faGamepad} size='2x' />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </Fragment>
  );
};
