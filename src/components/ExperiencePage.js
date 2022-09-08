import React from 'react';
import Experience from '../components/Experience';
import empoweru from '../imgs/empoweru.png';
import pointz from '../imgs/pointz.jpeg';
import brown from '../imgs/brown.png';
import fab from '../imgs/fab.png';

function ExperiencePage(props) {
    return(
        <div className='experience-page navy-bg'>
        <div className="section-header">
          <h2 className='page-title'>Experience</h2>
        </div>
        <Experience
          image={empoweru}
          company="EmpowerU"
          position="Software Engineer"
          date="June 2021 - May 2022"
          description="Designed the entire website’s wireframes, and incorporated modifications as suggested by team members. Assisted with the design of mobile application wireframes to follow conventional UI and UX features. Incorporated the landing page and bottom navigation bar on the mobile application.">
        </Experience>
         <Experience
          image={pointz}
          company="Pointz"
          position="Software Engineer Intern"
          date="May 2020 - August 2020"
          description="Incorporated a database management system with MySQL to effectively store user input data in an organized format. Implemented numerous API services (AWS, Mapbox, Graphhopper, etc.) to increase user-accessible features. Worked with product manager to integrate a new map interface with functional bike routing calculations in React Native. Assisted with redesigning the waypoints and hazard page to allow for user input. Researched and presented an optimal bike routing algorithm that is influenced by traffic data and user input of path hazards."
          link="https://www.bikepointz.com/">
        </Experience>
        <Experience
          image={fab}
          company="Full Stack at Brown"
          position="Full Stack Engineer"
          date="February 2021 - Present"
          description="Developed a website for Brown University's open source club (ReactJS & Reactstrap) in order to display their members and most recent projects, as well as other relevant club information. Designed all wireframes for the website, while ensuring to incorporate conventional UI and UX features. Integrated the entire backend and database (MariaDB & Sequelize), allowing club administrators to login and exclusively gain access to edit the club’s projects and members, which updates the database to reflect corresponding changes. Programmed the members and projects page to dynamically update with realtime changes to the database. Utilized Redux Persist to store the authentication status of the currently logged-in member.">
        </Experience>
        <Experience
          image={brown}
          company="Brown University"
          position="Undergraduate Teaching Assistant"
          date="August 2021 - December 2021"
          description="Worked with the professor and other teaching assistants to modify Brown’s graduate-level Data Engineering course curriculum, project, and homework. Hosted office hour sessions to answer student questions regarding high-level concepts and assignments/projects. Responsible for grading assignments and projects, whilst providing feedback for students.">
        </Experience>
        <Experience
          image={brown}
          company="Brown University"
          position="Undergraduate Research Assistant"
          date="August 2021 - December 2021"
          description="Measuring the dark matter content and distribution of galaxy clusters in three related ways, to study the sources of uncertainty in measuring the dark matter mass and the correlation between the methods. Developed a Python program that utilizes Astropy packages to retrieve and parse cluster data, as well as scipy to generate necessary plots used for determining a specified red-shifted galaxy’s mass distribution and ellipticity. Modified and ran bash scripts to perform a sequence of image processing (such as exposure calibration, image coaddition, and join calibration) of Abell cluster 3836 with provided reference catalogs and exposures">
        </Experience>
      </div>
    )
}

export default ExperiencePage;