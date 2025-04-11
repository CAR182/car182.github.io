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

      <div className='project__icons'>
        {project.sourceCode && <FontAwesomeIcon icon={faGithub} size='2x' />}
        {project.livePreview && <FontAwesomeIcon icon={faGamepad} size='2x' />}
      </div>
    </div>
  );
};

export default ProjectContainer;
