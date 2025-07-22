// import react from 'react';


// function About(){
//     return(
//         <>
//         <h3>This is about page</h3>
//         </>
//     )
// }
// export default About;
import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I'm Shreya, a passionate frontend developer with a love for clean UI,
          smooth UX, and creative problem-solving. I enjoy turning complex
          problems into simple, beautiful, and intuitive designs. I’m currently
          exploring full-stack development to build more dynamic web
          applications.
        </p>
        <p>
          When I'm not coding, you’ll find me Writing, exploring design ideas,reading books
          or learning something new in tech!
        </p>
      </div>
    </section>
  );
};

export default About;
