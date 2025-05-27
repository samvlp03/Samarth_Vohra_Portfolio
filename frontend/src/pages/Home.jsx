import React from 'react';
import { Link } from 'react-router-dom';
import { RiBookOpenLine, RiGitRepositoryLine, RiContactsBookLine, RiArrowRightDoubleFill } from 'react-icons/ri';
import '../styles.css'

const Home = () => {
  return (
    <main>
      <header className="container">
        <div className="content">
          <span className="blur"></span>
          <span className="blur"></span>
          <h4>WELCOME TO MY PORTFOLIO!</h4>
          <h1>
            Hello, my name is <span>Samarth Vohra</span>, ML Engineer \ Data Scientist \ Web Developer \ Software Developer \ Musician
          </h1>
          <p>
            Hello! I'm Samarth Vohra, a dedicated and passionate software developer with a strong background in machine learning, web development, and database management. I hold a degree in Computer Science and have gained valuable experience through various internships, competitions, and personal projects.
            <br /><br />
            I specialize in Python and have developed numerous machine learning models and web applications. My work demonstrates a blend of technical expertise and creativity, solving real-world problems with innovative solutions. I am proficient in tools and technologies such as Django, Flask, SQL, JavaScript, and more.
            <br /><br />
            I am constantly exploring new technologies and methodologies to enhance my skills and deliver high-quality projects. My journey in tech has been marked by a commitment to continuous learning and a drive to push the boundaries of what is possible.
            <br /><br />
            When I'm not coding, I enjoy composing music, art, creative writing, which helps me stay balanced and inspired.
            <br /><br />
            Let's connect and see how we can collaborate to create something extraordinary!
          </p>
        </div>

        <div className="image">
          <img src={'../images/header2.png'} alt="Header" />
        </div>
      </header>

      <section className="container">
        <h2 className="header">CONTENTS</h2>
        <div className="features">
          <div className="card">
            <span><RiBookOpenLine /></span>
            <h4>About Me</h4>
            <p>
              Welcome to my portfolio! I'm Samarth Vohra, a passionate software developer and data scientist with expertise in Python, machine learning, web development, and database management...
            </p>
            <Link to="/about">See More <RiArrowRightDoubleFill /></Link>
          </div>
          <div className="card">
            <span><RiGitRepositoryLine /></span>
            <h4>My Projects</h4>
            <p>
              Explore my collection of projects where theory meets practice. From machine learning models to web applications, each project demonstrates my technical skills...
            </p>
            <Link to="/projects">See More <RiArrowRightDoubleFill /></Link>
          </div>
          <div className="card">
            <span><RiContactsBookLine /></span>
            <h4>Contact Me</h4>
            <p>
              I'd love to hear from you! Whether you have a project idea, a job opportunity, or just want to connect, feel free to reach out...
            </p>
            <Link to="/contact">Contact Me <RiArrowRightDoubleFill /></Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
