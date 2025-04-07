import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

import './ProjectContainer.css';

export const ProjectContainer = ({ project }) => {
  let navigate = useNavigate();

  return (
    <div className='project' onClick={() => navigate(`/${project.name.toLowerCase()}`)}>
      <img className='project__img' src={project.tile} />
      <h3 className='project__name'>{project.name}</h3>
      <p>{project.description}</p>

      {/* <div className='project__icons'>
        {project.sourceCode && (
          <a href={project.sourceCode} aria-label='source code' className='link link--icon'>
            <FontAwesomeIcon icon={faGithub} size='2x' />
          </a>
        )}

        {project.livePreview && (
          <a href={project.livePreview} aria-label='live preview' className='link link--icon'>
            <FontAwesomeIcon icon={faGamepad} size='2x' />
          </a>
        )}
      </div> */}
    </div>
  );
};

export default ProjectContainer;
