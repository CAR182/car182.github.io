import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router';

import './ProjectContainer.css';

export const ProjectContainer = ({ project }) => {
  let navigate = useNavigate();

  return (
    <div className='project' onClick={() => navigate(`/project-${project.name.toLowerCase()}`)}>
      <h3>{project.name}</h3>
      <img className='project__img' src={project.tile} />

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
    </div>
  );
};

export default ProjectContainer;
