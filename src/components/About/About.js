import { about } from 'portfolio';
import './About.css';

export const About = () => {
  const { name, description } = about;

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hi, I'm <span className='about__name'>{name}.</span>
        </h1>
      )}

      <p className='about__desc'>{description && description}</p>
    </div>
  );
};

export default About;
