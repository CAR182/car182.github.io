import { ProjectHeader } from 'components/Projects/ProjectHeader';

export default ({ name, banner, reference }) => {
  return (
    <div>
      <ProjectHeader banner={banner} reference={reference} />
    </div>
  );
};
