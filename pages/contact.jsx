// import react from 'react';


// function Contact(){
//     return(
//         <>
//         <h3>This is contact page</h3>
//         </>
//     )
// }
// export default Contact;
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>If you'd like to connect, collaborate, or just say hi — feel free to reach out!</p>

      <div className="contact-info">
        <p>📧 Email: <a href="aisharai080@gmail.com">shreya@example.com</a></p>
        <p>💼 LinkedIn: <a href="https://www.linkedin.com/in/meka-shreya-545289318" target="_blank">linkedin.com/in/your-link</a></p>
        <p>💻 GitHub: <a href="https://github.com/Notsocoolreya" target="_blank">github.com/your-username</a></p>
      </div>
    </section>
  );
};

export default Contact;
