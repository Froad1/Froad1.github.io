import React from 'react';
import classes from './Framework.module.css';
import Project from '../Project/Project';

// Data
import frameworks from '../../data/frameworks';
import projects from '../../data/projects';

const Framework = ({ handleItemClick }) => {
    return (
        <>
            {frameworks.map((framework) => (
                <div className={classes.framework_item} key={framework.id}>
                    <div className={classes.framework_container}>
                        <div className={classes.framework_text}>
                            <img src={framework.icon} alt={framework.name} />
                            <span className={classes.framework_name}>{framework.name}</span>
                            {framework.subName && (<span className={classes.framework_subName}>{framework.subName}</span>)}
                        </div>
                        <div className={classes.line}></div>
                    </div>
                    <div className={classes.projects_container}>
                        {
                            projects.filter((project) => project.frameworks === framework.id).map((project) => (
                                <Project key={project.id} project={project} handleItemClick={handleItemClick} />
                            ))
                        }
                    </div>
                </div>
            ))}
        </>
    );
};

export default Framework;