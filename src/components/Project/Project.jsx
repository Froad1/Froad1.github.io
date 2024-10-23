import React from 'react';
import classes from './Project.module.css';

const Project = ({ project, handleItemClick }) => {
    return (
        <div className={classes.project} key={project.id} onClick={() => handleItemClick(project)}>
            <img src={project.icon} alt={project.name} />
            <p>{project.name}</p>
        </div>
    );
};

export default Project;