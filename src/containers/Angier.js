import { ProjectHeader } from 'components';

export default ({ status, banner, reference }) => {
	return (
		<div>
			<ProjectHeader status={status} banner={banner} reference={reference} />
		</div>
	);
};
