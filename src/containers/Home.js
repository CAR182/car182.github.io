import { About, Projects, Contact, ScrollToTop } from 'components';
import './About.css';
export const Home = () => {
  return (
    <div>
      <div className='about center'>
        <h1>
          Hi, I'm <span className='about__name'>Chris</span>
        </h1>

        <p className='about__desc'>
          I'm a Software Engineer, writer & general tinkerer. I'm less interested in the end result and more in playing,
          learning and generally drifting towards shiny things. Sometimes I finish the projects, sometimes life gets in
          the way. But I made this place to share my experiments in the hope that it might help or inspire others.
        </p>
        {/* <p className='about__desc'>
          Aside from technical work, i'm also a prolific reader. As such I created a section on here to share some
          recommendations of books, fiction & non-fiction alike.
        </p> */}
      </div>
      <Projects />
      <ScrollToTop />
      <Contact />
    </div>
  );
};

export default Home;
