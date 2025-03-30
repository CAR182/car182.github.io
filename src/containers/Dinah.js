import { Fragment } from 'react';
import { ProjectHeader } from 'components/Projects/ProjectHeader';
import './Projects.css';

export default ({ sourceCode, banner, reference }) => {
  return (
    <Fragment>
      <ProjectHeader source={sourceCode} banner={banner} reference={reference} />
      <h5>Summary</h5>
      <section className='summary'>
        This was an early Unity based project that I really put a lot of work into, though I was also incredibly
        inexperienced with Unity and this project became so convulted it became unsustainable. In reflection a 3D puzzle
        game is a quite a feat for a first attempt!
      </section>
      <h5>Tech Details</h5>
      <section className='body'>
        I really enjoy the simple 3D puzzle worlds of Toads Treasure Tracker and wanted to emulate this (albeit with a
        cube because I can't animate). The math controlling the movement logic allowed you to traverse any surface,
        including upside down which led to some fun level design and game mechanics but the code became more dense with
        each new feature and I continuously broke features over and over again (I had yet to learn the benefits of
        Unity's regression testing). The core concept always draws me back in. Maybe i'll come back to this eventually,
        I have learnt a lot since then and I always look back on this one with fondness.
      </section>
      <div className='centered'>
        <img src='images/Dinah/Dinah_2.png' />
        <img src='images/Dinah/Dinah_3.png' />
        <img src='images/Dinah/Dinah_4.png' />
      </div>
      <h5>The Result</h5>
      <div className='centered'>
        <video src='videos/Dinah.mp4' type='video/mp4' controls autoplay muted />
      </div>
    </Fragment>
  );
};
