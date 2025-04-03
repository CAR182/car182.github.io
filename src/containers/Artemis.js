import { Fragment } from 'react';
import { ProjectHeader } from 'components/Projects/ProjectHeader';
import './Projects.css';

export default ({ complete, sourceCode, live, banner, reference }) => {
  return (
    <Fragment>
      <ProjectHeader complete={complete} source={sourceCode} live={live} banner={banner} reference={reference} />
      <h5>Summary</h5>
      <section className='summary'>
        3D website design is a skillset that goes beyond what many front-end engineers do today. Working in a 3D
        environment with a camera requires a fundamentally different workflow and approach to a 2D canvas and is not
        necessarily a natural concept to many. I have a background in Computer Graphics and really like the creative
        oppurtunities that exist in this space and think it has a lot to offer. I learnt a tonne getting the project
        this far. It's parked for now, because it simply collided with life and I haven't had the time needed to push it
        further but maybe it'll rear it's head again at some point.
      </section>
      <h5>Tech Details</h5>
      <section className='body'>
        <p>
          As standard it's built on ThreeJS utilising
          <a href='https://r3f.docs.pmnd.rs/getting-started/introduction'> react-fiber</a> and{' '}
          <a href='https://github.com/pmndrs/drei'>react-drei</a> and i'm still using the wonderful{' '}
          <a href='https://github.com/pmndrs/leva'>Leva</a> library to assist. In addition the project scrolling is
          utilising <a href='https://kenwheeler.github.io/slick/'>slick-carousel</a> embedded in 3D space and
          experimenting with <a href='https://www.react-spring.dev/'>react-spring</a> and{' '}
          <a href='https://motion.dev/docs/react-animation'>motion</a> as animation options. They have fundamentally
          different approach to animation and I found that I had use cases that aligned to each of them. I chose to
          experiment with <a href='https://github.com/molefrog/wouter'>wouter</a> as a light weight routing alternative
          for this as it was a pretty simple app.
          <p>
            There were two real challenges that took up a lot of time:
            <p>
              1. Juggling layout & efficiency. I wanted rich interesting scenes but that took time to define in 3D and
              every asset added to the size of the page which caused issues maintaing the framerate{' '}
            </p>
            <p>
              2. Mobile layout is a nightmare. Unlike traditional 2D design. 3D layouts are not defined in CSS. There is
              a CSS overlay which is easily modified but different screen sizes & orientations required a fundamentally
              different 3D layout, interaction space and camera work. I had a few breakthroughs but it was a real slog
              and ultimately took up a lot of time.
            </p>
          </p>
          <p>I'm going to try and host this for a live demo because I think it has value but many bugs right now.</p>
        </p>
      </section>
      <h5>The Result</h5>
      <div className='centered'>
        <img src='images/Artemis/Artemis_1.png' />
        <img src='images/Artemis/Artemis_2.png' />
        <img src='images/Artemis/Artemis_3.png' />
      </div>
      <h5>Credits</h5>
      <p>
        Shout out to <a href='https://kaylousberg.itch.io/'> Kay Lousberg </a> &
        <a href='https://kenney.nl/'> Kenney </a>
        for their amazing collections of assets that make this type of experimenting much easier.
      </p>
    </Fragment>
  );
};
