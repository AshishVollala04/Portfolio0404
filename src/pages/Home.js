import React from 'react';
import './Home.css';
// Import image directly
import profilePic from '../assets/1000114379.png';

function Home() {
  return (
    <section id="home" className="home">
      <div className="animated-bg"></div>
      <div className="home-container">
        <div className="content">
          <p>Welcome to My Portfolio</p>
          <h1>Ashish Vollala</h1>
          <h2>Innovative Problem-Solver | Web Developer | AI Enthusiast</h2>
          <p>Transforming ideas into impactful solutions using technology.</p>
        </div>
        <div className="home-image">
          <img src={profilePic} alt="Ashish Vollala" className="profile-pic" />
        </div>
      </div>
    </section>
  );
}

export default Home;
