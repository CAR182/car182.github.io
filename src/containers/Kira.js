import { Fragment } from 'react';
import { ProjectHeader } from 'components/Projects/ProjectHeader';
import './Projects.css';

export default ({ sourceCode, live, banner, reference }) => {
  return (
    <Fragment>
      <ProjectHeader source={sourceCode} live={live} banner={banner} reference={reference} />
      <h5>Summary</h5>
      <section className='summary'>
        This project was a training project that I developed to help train some of my junior engineers. This is an
        example project where the key thing was building out a slick, professional UI with as little additional packages
        as possible.
      </section>
      <h5>Tech Details</h5>
      <section className='body'>
        <p>
          With NPM it is far too easy to rely on third party packages, many of them unneceesary (and every one a
          potential risk). I always encourage growing a core understanding of the fundamentals and keeping projects
          lean. As such this is pure React, HTML & CSS (I also utilised a Carousel package, because i'm not a monster!)
          with a focus on good architectural practices and component reuse. I have utilised this project for workshops
          several times now, often using it as a base to extend from or pulling out code and tasking the group to
          rebuild. It's a friendly way to get people on board and upskill their problem solving.
          <p>
            I feel that app clones are a great way to learn, building to a design with focus on the attention to detail.
            I am not a designer, and don't have a personal UX engineer on hand, so building something from scratch
            myself is not going to have the same visual impact and i'm unlikely to come up with great visual elements
            that will challenge my engineering understanding. Many great designers put in time to create the original,
            we can leverage that for our own development.
          </p>
        </p>
        <div className='imageContainer'>
          <img src='images/Kira/Kira_1.png' />
          <img src='images/Kira/Kira_2.png' />
          <img src='images/Kira/Kira_3.png' />
        </div>
      </section>
      <h5>The Result</h5>
      <div className='centered'>
        <img src='images/Kira/Kira.gif' />
      </div>
    </Fragment>
  );
};
