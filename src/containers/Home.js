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
          I'm a Software Engineer, though today i'm a lot more hands off. However the Engineer in me has never left and
          when I get time I tinker and make things. I'm less interested in the end result and more in experimenting and
          learning. Sometimes I finish the projects, sometimes life gets in the way. But either way I made this place to
          share for others benefit.
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
