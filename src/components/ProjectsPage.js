import React from 'react';
import skimage from '../imgs/skimage.png'
import sets from '../imgs/sets.png'
import television from '../imgs/television.png'
import yoki from '../imgs/yoki.png'
import Project from '../components/Project';
import brown from '../imgs/brown.png';
import maps from '../imgs/maps.png'
import ai from '../imgs/ai.png'

function ProjectsPage(props) {
    return(
        <div className='project-page dark-grey-bg'>
        <div className="section-header">
          <h2>Projects</h2>
        </div>
        <div className='project-list'>
        <Project
            image={ai}
            title="Artificial Intelligence Course Website"
            description="Designed and developed a website for Brown University's Artificial Intelligence, themed after Game of Thrones. The course site displays course logistics that is updated as new lectures and assignments are released."
            tech="ReactJS"
            link="https://csci1410-2022.vercel.app/">
          </Project>
          <Project
            image={skimage}
            title="Food Classification"
            description="Constructed a convolutional neural network (CNN) to classify a subset of food types in the Food-101 data set. Implemented an autoencoder to reduce the noise of input images taken in dark environments. Utilized an input optimizer to showcase the CNN's targeted features."
            tech="Python, TensorFlow, Computer Vision"
            github="https://github.com/meera-kurup/skimage">
          </Project>
          <Project
            image={maps}
            title="Maps Modeling"
            description="Modeled the basic functionalities of Google Maps to generate all possible routes between two distinct locations. Implemented bus and train schedules, and fares. Implemented a visualizer using JavaScript. Created in collaboration with other developers."
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
                        Utilized OpenCV cv2 to extract one's hand from its background and modify each frame to appear similar to training data. Created in collaboration with other developers."
            tech="Python, TensorFlow, Computer Vision"
            github="https://github.com/sophiatu2/television">
          </Project>
          <Project
            image={yoki}
            title="Yoki"
            description="Developed a web application that connects students with similar interests. Implemented user authentication and password encryption. Created in collaboration with other developers."
            tech="Java, Apache Spark, JavaScript, SQL, HTML/CSS, Web Development">
          </Project>
          </div>
      </div>
    )
}

export default ProjectsPage;