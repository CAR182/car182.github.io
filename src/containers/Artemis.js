import { Fragment } from 'react';
import { ProjectHeader } from 'components/Projects/ProjectHeader';
import './Projects.css';

export default ({ banner, reference }) => {
  return (
    <Fragment>
      <ProjectHeader banner={banner} reference={reference} />
    </Fragment>
  );
};
