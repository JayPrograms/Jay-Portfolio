import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, courseOne, courseTwo } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects And Courses"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Blog/Game Review Website"
          des="A web platform allowing users to discuss and vote on their favorite games. Built using React.js, Node.js, and PostgreSQL for reliable data storage."
          src={projectOne}
          link="https://github.com/JayPrograms/Game-Community-Project"
        />
        <ProjectsCard
          title="Event Organizer Website"
          des="An event organizer app with location tracking using MapBox API and built using JavaScript, Html, CSS. It allows users to create new events and display where they are on a map for attendees to see."
          src={projectTwo}
          link="https://github.com/heckerteam/gryphhackback"
        />
        <ProjectsCard
          title="Calorie Tracker Webapp"
          des="A computer vision-based calorie tracking tool that identifies food and estimates calories with 90% accuracy using Firebase."
          src={projectThree}
          link="https://github.com/theDe-bugger/mycalcount"
        />
        <ProjectsCard
          title="Waste Management System"
          des="A computer vision-powered app that identifies waste items from a picture and informs users whether the item should go to garbage, recycling, or compost. Utilizing image classification techniques, this project makes eco-friendly disposal decisions more accessible to users."
          src={projectFour}
          link="https://github.com/JayPrograms/GRCScannerFrontEnd"
        />
        <ProjectsCard
          title="Machine Learning Specialization"
          des="This comprehensive course covered foundational machine learning algorithms, including linear regression, logistic regression, neural networks, and unsupervised learning techniques like k-means clustering. Through hands-on exercises in Python and Octave, I gained a deep understanding of model training, evaluation, and optimization."
          src={courseOne}
          link="https://www.linkedin.com/in/jay-patel-02988b217/overlay/1728878643673/single-media-viewer/?profileId=ACoAADbE4mEB9rrcJBWfgiNCH7F7SJG092HlkFM"
        />
        <ProjectsCard
          title="Deep Learning Specialization"
          des="This course delved into the design and application of deep neural networks. Key topics included neural network architectures, hyperparameter tuning, convolutional networks (CNNs), recurrent neural networks (RNNs), and natural language processing (NLP). Using frameworks like TensorFlow and Keras, I developed practical skills for implementing deep learning models in real-world projects."
          src={courseTwo}
          link="https://www.linkedin.com/in/jay-patel-02988b217/overlay/1728878752180/single-media-viewer/?type=DOCUMENT&profileId=ACoAADbE4mEB9rrcJBWfgiNCH7F7SJG092HlkFM"
        />
      </div>
    </section>
  );
}

export default Projects