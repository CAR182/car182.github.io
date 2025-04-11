import { Fragment } from 'react';
import { ProjectHeader } from 'components/Projects/ProjectHeader';
import './Projects.css';

export default ({ complete, sourceCode, live, banner, reference }) => {
  return (
    <Fragment>
      <ProjectHeader complete={complete} source={sourceCode} live={live} banner={banner} reference={reference} />
      <h5>Summary</h5>
      <section className='summary'>
        This project was an exercise to explore game development in a different medium and challenge myself with
        something new in React with the constraints of the browser and JS Canvas. I grew up with the classic Pokémon
        games so it was fun recreating as much detail as I could whilst keeping a small scope.
        <p>
          <br></br>Now playable in the browser! (excuse the bugs!)
        </p>
      </section>
      <h5>Tech Details</h5>
      <section className='body'>
        <p>
          I created tilemaps using <a href='https://www.mapeditor.org/'>Tiled</a> layers that needed no interaction
          remained as images, whilst layers that required interaction were exported as JSON.The App processes the JSON
          and creates unique elements accordingly split across layers to give dimension. Simple four-point Collision
          Detection is then used against the coordinates to allow interaction with barriers, Items & NPCs. The Dialogue
          overlay is pure animated HTML and sits on top of the Canvas layers.
          <p>
            The Canvas is not a camera, but we need it to feel like one. So we use a simple parallax in which the
            character remains stationary in the middle of the screen, animating on the spot and chaning direction. The
            impression of movement comes from the layers moving around the character.
          </p>
          <p>
            I used <a href='https://github.com/pmndrs/leva'>Leva</a> for realtime debugging. I really like this library.
            It's React Hook system is easy to integrate and allows control at any layer of the App that merges into a
            single clean menu. When working in the Canvas, the DOM output is an image so debugging is limited an d I
            used this tool extensively throughout to quickly verify things were working and finalise details.
          </p>
        </p>
        <div className='imageContainer'>
          <img src='images/Iro/Iro_Layers_1.gif' />
          <img src='images/Iro/Iro_Layers_2.gif' />
        </div>
      </section>
      <h5>The Result</h5>
      <div className='centered'>
        <video src='videos/Iro.mp4' type='video/mp4' controls autoPlay muted />
      </div>
      <h5>Credits</h5>
      <p>
        Shout out to <a href='https://www.spriters-resource.com/game_boy_gbc/pokemonredblue/'>spriters-resource</a> for
        their amazing collection of assets that made this all possible!
      </p>
    </Fragment>
  );
};
