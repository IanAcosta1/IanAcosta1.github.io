import React from 'react';
import profilepic from '../imgs/profilepic.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function AboutPage(props) {
    return(
        <div className='about-page' >
        <div className='about-wrapper'>
          <div className='profile-img'>
            <img src={profilepic}></img>
          </div>
          <div className='about-desc'>
            <h1 className='page-title'>Hey, I'm Ian!</h1>
            <p>I am a senior at Brown University studying computer science with pathways in visual computing and artificial intelligence/machine learning. I also have interests in data science and full-stack development!</p>
            <div className='icon-wrapper'>
              <a href="https://github.com/IanAcosta1">
                <FontAwesomeIcon icon={faGithub} size={'2x'} className="icons"/>
              </a>
              <a href="https://www.linkedin.com/in/ian-henry-acosta/">
                <FontAwesomeIcon icon={faLinkedin} size={'2x'} className="icons"/>
              </a>
              <a href="mailto:ianhacosta@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size={'2x'} className="icons"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default AboutPage;