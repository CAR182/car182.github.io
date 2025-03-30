import { Fragment } from 'react';
import { ProjectHeader } from 'components/Projects/ProjectHeader';
import './Projects.css';

export default ({ sourceCode, live, banner, reference }) => {
  return (
    <Fragment>
      <ProjectHeader source={sourceCode} live={live} banner={banner} reference={reference} />
      <h5>Summary</h5>
      <section className='summary'>Lorem Ipsum ....</section>
      <h5>Tech Details</h5>
      <section className='body'></section>
      <h5>The Result</h5>
      <div className='centered'>
        <img src='images/Artemis/Artemis_1.png' />
        <img src='images/Artemis/Artemis_2.png' />
        <img src='images/Artemis/Artemis_3.png' />
      </div>
    </Fragment>
  );
};
