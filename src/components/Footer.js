import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function Footer(props) {
    return(
        <footer className='dark-grey-bg'>
            <div className='footer-icon-wrapper'>
              <a href="https://github.com/IanAcosta1">
                <FontAwesomeIcon icon={faGithub} size={'xl'} className="footer-icons"/>
              </a>
              <a href="https://www.linkedin.com/in/ian-henry-acosta/">
                <FontAwesomeIcon icon={faLinkedin} size={'xl'} className="footer-icons"/>
              </a>
              <a href="mailto:ianhacosta@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} size={'xl'} className="footer-icons"/>
              </a>
            </div>
            <div className='copyright'>
              Designed by Ian Acosta © 2022
            </div>
        </footer>
    )
}

export default Footer;