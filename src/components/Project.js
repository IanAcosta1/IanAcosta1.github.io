import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFilePowerpoint, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
function Project(props) {
    let githubIcon
    if (props.github) {
        githubIcon = <a href={props.github} target="_blank"><FontAwesomeIcon icon={faGithub} size={'2x'} className="project-icons"/></a>;
    }
    
    let openIcon
    if (props.link) {
        openIcon = <a href={props.link} target="_blank"><FontAwesomeIcon icon={faArrowUpRightFromSquare} size={'2x'} className="project-icons"/></a>;
    }
    return(
        <div className='project-wrapper'>
            <div className='project-img'>
                <img src={props.image}></img>
            </div>
            <div className='project-desc'>
                <h2 className=''>{props.title}</h2>
                <p>{props.description}</p>
                <p><b>Relevant Topics:</b> {props.tech}</p>
                {githubIcon}
                {openIcon}

            </div>
        </div>
        
    )
}

export default Project;