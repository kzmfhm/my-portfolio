// ProjectCard.js
import React from 'react';
import githubImage from '../../images/github.svg';
import './style.css';

const ProjectCard = ({ title, image, description, technologies, githubLink, height, width }) => {
  return (
    <div className='card'>
      <img
        src={image}
        alt={title}
        style={{ width: width || '350px', height: height || '260px' }}
      />
      <h2 className='md:mx-[80px] mt-[10px] align-middle text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600  hover:-translate-y-1 hover:scale-110 duration-300 ...'>
        {title}
      </h2>
      <p className='md:mx-[13px] mt-[10px] align-middle text-white text-1xl cursor-pointer transition ease-in-out delay-150 hover:text-yellow-600  ...'>
        {description}
      </p>
      <div className='project-card-technologies'>
        <div className="technologies-container">
          {technologies.map((tech, index) => (
            <span key={index} className={`tech-${index + 1}`}>
              {tech}
            </span>
          ))}
        </div>
        <br />
        <div className='zone'>
          <div className="github">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <img src={githubImage} alt="GitHub Icon" className="github-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

