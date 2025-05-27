import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className='about-title'>About Me</h1>
      <br />

      {/* Flex container for paragraph + image */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
        <p style={{ flex: 1 }}>
          Welcome to my portfolio! I’m Samarth Vohra, a dedicated and enthusiastic software developer and data scientist with a strong passion for leveraging technology to solve real-world problems. With a solid foundation in Python programming, I specialize in machine learning, data analysis, and building intelligent systems that drive actionable insights. Alongside my data science expertise, I have extensive experience in web development, creating responsive and user-friendly applications using modern frameworks and tools. I am also proficient in database management, ensuring efficient data storage, retrieval, and security. My goal is to continuously learn and innovate, combining my skills to deliver impactful software solutions that enhance user experience and business value.
        </p>

        <img
          src={'../images/Samarth_Vohra.jpg'}
          alt="Samarth Vohra"
          style={{
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            objectFit: 'cover',
            objectPosition: 'top',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          }}
        />
      </div>

      <button
        className="card"
        onClick={() => navigate('/skills')}
        style={{
          flex: 1,
          padding: '2rem',
          border: '1px solid #ccc',
          borderRadius: '10px',
          cursor: 'pointer',
          textAlign: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          gap: '5rem',
        }}
        type="button"
      >
        <h2>Skills</h2>
        <p>
          Discover the diverse set of technical skills and programming languages I have mastered over the years. This section highlights my expertise in areas such as software development, data science, and AI, along with practical experience in various tools and frameworks.
        </p>
      </button>

      <button
        className="card"
        onClick={() => navigate('/certificates')}
        style={{
          flex: 1,
          padding: '2rem',
          border: '1px solid #ccc',
          borderRadius: '10px',
          cursor: 'pointer',
          textAlign: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          gap: '1rem',
          marginTop: '1rem',
        }}
        type="button"
        onKeyPress={(e) => {
          if (e.key === 'Enter') navigate('/certificates');
        }}
      >
        <h2>Certificates</h2>
        <p>
          Browse through my collection of professional certificates and achievements, showcasing my commitment to continuous learning and excellence in various fields. These credentials validate my skills and knowledge gained from recognized institutions.
        </p>
      </button>
    </div>
  );
};

export default About;
