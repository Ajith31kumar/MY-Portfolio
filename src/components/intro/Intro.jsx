import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/ph1.png';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3+ Completed Projects</small>
            </article>
          </div>
          <p>I have spent the last several months immersing myself in learning a diverse range of technologies, including HTML, CSS, JavaScript, React.js, Node.js, Express.js, SQL,mongoDB,Python,C,C++ My learning journey has been guided by excellent mentors at GUVI Geeks Network and IITM - Research Park.

Moreover, despite the inherent challenges of learning while taking care of children, the experience has honed my ability to work efficiently, stay productive, and respond swiftly even in high-pressure situations—an invaluable skill in the dynamic tech industry.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro