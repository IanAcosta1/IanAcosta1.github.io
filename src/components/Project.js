import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
function Project(props) {
    let githubIcon
    if (props.github) {
        githubIcon = <a href={props.github}><FontAwesomeIcon icon={faGithub} size={'2x'} className="project-icons"/></a>;
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
            </div>
        </div>
        
    )
}

export default Project;