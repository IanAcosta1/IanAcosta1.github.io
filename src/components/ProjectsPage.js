import React from 'react';
import skimage from '../imgs/skimage.png'
import sets from '../imgs/sets.png'
import television from '../imgs/television.png'
import yoki from '../imgs/yoki.png'
import Project from '../components/Project';
import brown from '../imgs/brown.png';

function ProjectsPage(props) {
    return(
        <div className='project-page dark-grey-bg'>
        <div className="section-header">
          <h2>Projects</h2>
        </div>
        <div className='project-list'>
          <Project
            image={skimage}
            title="Food Classification"
            description="Implemented an autoencoder to improve grainy image inputs taken in dark-lit environments."
            tech="Python, TensorFlow, Computer Vision"
            github="https://github.com/meera-kurup/skimage">
          </Project>
          <Project
            image={brown}
            title="Maps Modeling"
            description="Modeled the basic functionalities of Google Maps to generate all possible routes between two distinct locations. Implemented bus and train schedules, fares. Implemented a visualizer using JavaScript. Created in collaboration with two other developers."
            tech="Forge (Alloy), JavaScript">
          </Project>
          <Project
            image={sets}
            title="SET Modeling"
            description="Modeled the game SET using Forge (an Alloy-based language), and developed a solver to find all possible solutions to a given board. Developed a visualizer using JavaScript. Created in collaboration with one other developer."
            tech="Forge (Alloy), JavaScript"
            github="https://github.com/abhinavsriram/formal-model-set-game">
          </Project>
          <Project
            image={television}
            title="Remote Hand Controller"
            description="Created an application that controls a music player with various hand signs displayed from a live camera feed.
                        Trained a convolutional neural network to recognize and classify these hand signs.
                        Utilized OpenCV cv2 to extract one's hand from its background and modify each frame to appear similar to training data. Created in collaboration with three other developers."
            tech="Python, TensorFlow, Computer Vision"
            github="https://github.com/sophiatu2/television">
          </Project>
          <Project
            image={yoki}
            title="Yoki"
            description="Developed a web application that connects students with similar interests. Implemented user authentication and password encryption. Created in collaboration with three other developers."
            tech="Java, Apache Spark, JavaScript, SQL, HTML/CSS, Web Development">
          </Project>
          </div>
      </div>
    )
}

export default ProjectsPage;