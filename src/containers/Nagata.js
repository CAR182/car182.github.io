import { Fragment } from 'react';
import { ProjectHeader } from 'components/Projects/ProjectHeader';
import './Projects.css';

export default ({ sourceCode, live, banner, reference }) => {
  return (
    <Fragment>
      <ProjectHeader source={sourceCode} live={live} banner={banner} reference={reference} />
      <h5>Summary</h5>
      <section className='summary'>
        This project was a bit of a reprieve from the programming projects I usually juggle. I wanted to do something
        creative & learn a little more Blender. I quite like the look of diorama's and the concept of minitature worlds
        so I thought i'd throw this idea in and see what came of it.
      </section>
      <h5>Tech Details</h5>
      <section className='body'>
        <p>
          I knew I wanted something real world and began playing with the mapping offerings from Microsoft & Mapbox but
          none of them really hit the mark. They look fine when generating mountainous terrain, but I wanted to play
          with cities and they weren't up to scratch.
          <p>
            During research I came across <a href='https://renderdoc.org/'>Render Doc</a>, a free tool that enables you
            to navigate & download the OpenGL context of an application. In this case I pointed it at the navigation
            mode inside Google Maps and pulled out the information into a fully textured mesh. The mesh was dense,
            really dense, my computer sounded like it was going to take off on more than a few occasions. The texture
            quality does not hold up on closer inspection. But for the birds eye look I had in mind. It would work
            perfectly.
          </p>
          <p>
            I used a Blender Add On to import this large dataset it’s heavy and it takes a few moments but it gives you
            a working mesh. A lot of time was spent cleaning the mesh and building out the scene. The water was replaced
            to better interact with lights and I even spent a lot of time hand animating elements in the scene; Birds,
            Traffic, Water all smoothly moved about. Unfortunately, rendering this out of Blender proved to be a
            challenge that I didn't want to spend further time on so I left it at static renders.
          </p>
        </p>
        <div className='imageContainer'>
          <img src='images/Nagata/Nagata_1.png' />
        </div>
      </section>
      <h5>The Result</h5>
      <div className='centered'>
        <img src='images/Nagata/Nagata_2.png' />
        <img src='images/Nagata/Nagata_3.png' />
        <img src='images/Nagata/Nagata_4.png' />
      </div>
      <h5>Credits</h5>
      <p>
        Shout out to <a href='https://github.com/eliemichel/MapsModelsImporter'> this Blender plugin</a> that did the
        heavy lifting of the initial mesh.
      </p>
    </Fragment>
  );
};
