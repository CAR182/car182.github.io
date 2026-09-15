import { Fragment } from 'react';
import { ProjectHeader } from 'components/Projects/ProjectHeader';
import './Projects.css';

export default ({ status, sourceCode, banner, reference }) => {
	return (
		<Fragment>
			<ProjectHeader status={status} source={sourceCode} banner={banner} reference={reference} />
			<h5>Summary</h5>
			<section className='summary'>
				After finishing up project Iro, I had a desire for more Tilebased games. But if I was going to scale up i'd need an engine as god knows the DIY methods in Iro were not
				going to scale! That said, I didn't want to rush into something brand new so I began designing something on paper on the side and focused my technical learning on a new
				Engine and through in TypeScript for good measure as i'd been meaning to try it out. After testing a few options, Phaser came out on top purely for easy it was for me to
				get moving. It has broad capability but is fairly lightweight which in the world of game engines is rare. I didn't want to dive into another Unity-like system.
				<p>
					<br></br> There is unfortunately not much to add for this one. I re-worked the Iro system to work in Phaser, learning more about Tiled and Animation systems as I went in
					preperation for turning my developing game notes into something next ...
				</p>
			</section>
		</Fragment>
	);
};
