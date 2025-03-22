import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { contact } from 'portfolio';

import './Contact.css';

export const Contact = () => {
  if (!contact.email) return null;

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      {contact.linkedin && (
        <a href={contact.linkedin} aria-label='linkedin' className='link link--icon'>
          <FontAwesomeIcon icon={faLinkedin} size='2x' />
        </a>
      )}
      {/* <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a> */}
    </section>
  );
};

export default Contact;
