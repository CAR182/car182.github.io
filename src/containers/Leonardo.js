import { Fragment } from 'react';
import { ProjectHeader } from 'components/Projects/ProjectHeader';
import './Projects.css';

export default ({ complete, banner, reference }) => {
  return (
    <Fragment>
      <ProjectHeader complete={complete} banner={banner} reference={reference} />
      <h5>Summary</h5>
      <section className='summary'>
        This project was a collaboration piece and an attempt to build and release something for mobile on the App
        store. It was a puzzle app, with collectible stickers all based around characters and design from{' '}
        <a href='http://valeria-issa.squarespace.com/'>Valeria Issa</a>. This piece was challenging. Unity quite the
        beast and when you are not using it regularly its hard to keep up with all the moving parts. Additionally, the
        Google App Store policy changed during development making it hard to release. As such, we never quite got to the
        finish line in this iteration but i'm hopeful these assets won't go to waste and might be part of a future
        project.
      </section>

      <h5>Tech Details</h5>
      <section className='body'>
        <p>
          I created puzzle meshes using blender which gave them a bit more physicality than 2D images. These were simply
          plain meshes for each puzzle size and the image was later mapped on to the mesh as a material, keeping it
          pretty light-weight.
        </p>
      </section>
      <h5>The Result</h5>

      <div className='centered'>
        <img src='images/Leonardo/Leonardo_1.jpg' />
        <img src='images/Leonardo/Leonardo_2.jpg' />
        <img src='images/Leonardo/Leonardo_3.jpg' />
      </div>

      <h5>Credits</h5>
      <p>
        Shout out to <a href='http://valeria-issa.squarespace.com/'>Valeria Issa</a> for creating a great set of assets!
      </p>
    </Fragment>
  );
};
