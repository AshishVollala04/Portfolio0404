import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="animated-bg"></div>
      <h2 className="animated-title">Projects</h2>
      <div className="project-card animated">
        <h3>AI-Powered Chatbot</h3>
        <p>
          Developed an AI chatbot capable of handling customer inquiries with natural language processing. Integrated machine learning models using Python and deployed using Flask.
        </p>
        <p><strong>Technologies:</strong> Python, Flask, NLP, TensorFlow</p>
      </div>
      <div className="project-card animated">
        <h3>Data Visualization Dashboard</h3>
        <p>
          Created an interactive data visualization dashboard using React and D3.js to display large datasets in various chart formats, enabling users to analyze trends and make data-driven decisions.
        </p>
        <p><strong>Technologies:</strong> React, D3.js, JavaScript, CSS</p>
      </div>
      <div className="project-card animated">
        <h3>Portfolio Website</h3>
        <p>
          Designed and developed a portfolio website to showcase projects, skills, and experience. Implemented responsive design and interactive elements for a professional user experience.
        </p>
        <p><strong>Technologies:</strong> HTML, CSS, JavaScript, React</p>
      </div>
      <div className="project-card animated">
        <h3>Machine Learning Model for Prediction</h3>
        <p>
          Built a predictive model using machine learning algorithms to forecast sales data. The model was trained and tested using Python libraries and was integrated with a web app for user access.
        </p>
        <p><strong>Technologies:</strong> Python, scikit-learn, Pandas, Flask</p>
      </div>
      <div className="project-card animated">
        <h3>IoT-Based Home Automation System Through Voice Control</h3>

        <p>
          Engineered an efficient IoT home automation system with voice control using ESP8266 and Adafruit IO, optimizing for efficiency. 
          Achieved a 30% reduction in power consumption and a 45% improvement in voice recognition processing time for enhanced usability.
        </p>
        <p><strong>Technologies:</strong> IoT, ESP8266, Adafruit IO, Voice Control</p>
      </div>
      <div className="project-card animated">
        <h3>Flower Disease Diagnosis Model Using Deep Convolutional Neural Network</h3>
        
        <p>
          Developed a deep learning model for timely disease detection in flowers, using a dataset of 1602 high-resolution images covering diverse disease classes like 'healthy', 'rhizopus', 'powdery mildew', 'rust', and 'blight'.
        </p>
        <p>
          The model utilized ensemble learning, combining Xception and DenseNet121 architectures with transfer learning from ImageNet. This approach achieved an accuracy of 96.4% for disease classification.
        </p>
        <p><strong>Technologies:</strong> Python, TensorFlow, Keras, Deep Learning, Transfer Learning, DCNN</p>
      </div>
      <div className="project-card animated">
      <h3>Online Shopping System</h3>
        
        <p>
          Created a comprehensive online shopping system that allows users to browse, search, and purchase products with a user-friendly interface. The project involved:
        </p>
        <p>Developed a responsive and user-friendly web interface.</p>
        <p>Managed product information in a database and integrated secure authentication and payment processing.</p>
        <p>Implemented features like order processing, product management, customer support, and data analytics.</p>
        <p><strong>Technologies:</strong> HTML, CSS, JavaScript, PHP, MySQL, Web Development</p>
      </div>
    </section>
  );
}

export default Projects;
