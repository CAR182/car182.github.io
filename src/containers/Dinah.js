import { ProjectHeader } from 'components';

export default ({ name, banner, reference }) => {
  return (
    <div>
      <ProjectHeader banner={banner} reference={reference} />
    </div>
  );
};
