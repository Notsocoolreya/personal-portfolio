// import react from 'react';


// function Home(){
//     return(
//         <>
//         <h3>This is home page</h3>
//         </>
//     )
// }
// export default Home;
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <h1>Hi, I'm <span>Shreya</span></h1>
        <p>Creative Frontend Developer passionate about building modern and interactive user experiences.</p>
        <a href="#contact" className="cta-button">Let's Connect</a>
      </div>
      <div className="home-image">
        <img src="https://img.freepik.com/premium-vector/woman-profile-cartoon_18591-58480.jpg" alt="Profile" />
      </div>
    </section>
  );
};

export default Home;

