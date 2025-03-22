import { ProjectHeader } from 'components/Projects/ProjectHeader';

export default ({ sourceCode, live, banner, reference }) => {
  return (
    <div>
      <ProjectHeader source={sourceCode} live={live} banner={banner} reference={reference} />
      <div>
        <h4>Summary</h4>
        <p>
          This project was an exercise piece for myself to explore game development in a different medium and challenge
          myself with something new in React with the constraints of the browser and JS Canvas (and of course I am a
          massive classic Pokémon fan). I could have continued with this project forever, there was so much to add and
          it was a joy to build, but I had to draw the line somewhere. Alas, Pallet town is the extent of the map but
          all the interiors are in there!
          <br></br>I used a tile based design created with <a href='https://www.mapeditor.org/'>Tiled</a> and exported
          the content to JSON. The App processes the JSON and creates unique elements accordingly splitting them across
          layers to reduce re-draw. Simple four-point Collision Detection is then used for blocking as well as
          interacting with Items & NPCs. The Dialogue overlay is pure HTML and sits on top of the Canvas layers. Shout
          out to <a href='https://www.spriters-resource.com/game_boy_gbc/pokemonredblue/'>spriters-resource</a>
          for their amazing collection of assets that made this all possible!
        </p>
        <img class='side-img' src='images/Iro_Layers_1.gif' width='35%' />
      </div>
    </div>
    // 							<h4> Debugging with Leva?</h4>
    // 							<div class="flex-row gap-small">

    // 								<p>I really like this library. I previously used dat.GUI for 3D work but found it was becoming unkept.
    // 									Hooking up <a href="https://github.com/pmndrs/leva" >Leva</a>
    // 									I found that it had all the same features of dat.GUI but was easier to integrate as it utilises the native
    // 									hook system so you can have controls at any layer of the App and they auto merge into single clean menu.
    // 									Like working in 3D, the JS Canvas output is an image so debugging is limited and I used this tool extensively
    // 									throughout to quickly verify things were working and finalise details.
    // 								</p>
    // 									<img src="images/Iro/Pokémon-Layers.gif" width="100%"/>
    // 							</div>
    // 							<div class="flex-row" style="align-items: center;"><h3> The Result </h3><p>(don't forget the audio!):</p></div>
    // 							<div class="flex-col">
    // 								<video controls autoplay muted  style="width:100%">
    // 									<source src="videos/Iro/Pokémon_React.mp4" type="video/mp4" >
    // 									Your browser does not support the video tag.
    // 								</video>
    // 							</div>

    // 					</div> */}
  );
};
