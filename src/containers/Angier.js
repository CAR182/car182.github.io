import { ProjectHeader } from 'components';

export default ({ complete, banner, reference }) => {
  return (
    <div>
      <ProjectHeader complete={complete} banner={banner} reference={reference} />
    </div>
  );
};
