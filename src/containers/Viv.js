import { Fragment } from 'react';
import { ProjectHeader } from 'components/Projects/ProjectHeader';
import './Projects.css';

export default ({ status, sourceCode, banner, reference }) => {
	return (
		<Fragment>
			<ProjectHeader status={status} source={sourceCode} banner={banner} reference={reference} />
			<h5>Summary</h5>
			<p>This is an original idea that i'm actively working on. It's an RPG/Puzzle hybrid.</p>
			<br></br>
			After gaining some confidence with this tech-stack on Project Emil I decided it was time to do something new. Still very much aiming for prototype scale, because i'd actually
			like to finish it, but it's planned to be a polished single-level game. It's coming along nicely and i'm learning a tonne, but there is still a long way to go!
			<section className='summary'></section>
			<h5>Tech Details</h5>
			Built in Phaser 4 with TypeScript. I'm mocking up using <a href='https://pixelfrog-assets.itch.io/tiny-swords'>this asset pack</a> from PixelFrog to eventually bring it to
			life.
			<section className='body'></section>
			<div className='centered'></div>
			<h5>Work in Progress</h5>
			<div className='centered'>
				<img src='images/Viv/Viv_1.png' />
				<img src='images/Viv/Viv_2.png' />
			</div>
		</Fragment>
	);
};
