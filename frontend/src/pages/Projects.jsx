import React, { useEffect, useState } from 'react';
import '../styles.css'

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Replace this fetch URL with your actual backend endpoint
    fetch('/api/projects')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Failed to fetch projects:', err));
  }, []);

  return (
    <div className="container">
    <h1 className='projects-header'>Projects</h1>
    <br></br>
    <p className='project-para'>Explore my diverse collection of projects where theoretical knowledge seamlessly transforms into practical solutions. Each project reflects my hands-on experience and technical proficiency, ranging from sophisticated machine learning models to dynamic web applications. These works showcase my ability to design, develop, and deploy innovative software that addresses complex challenges across various domains. Whether it’s building predictive algorithms, crafting interactive user interfaces, or integrating backend systems, my projects highlight a commitment to quality, creativity, and continuous learning.</p>
    <br></br>

      <main>
        <div className="projects">
          {projects.map((project) => (
            <div key={project.id} className="project">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p><strong>Completion Time:</strong> {project.completion_time}</p>
              <p>
                <strong>GitHub Link:</strong>{' '}
                <a href={project.github_link} target="_blank" rel="noopener noreferrer">
                  {project.github_link}
                </a>
              </p>
              <p><strong>Hosted:</strong> {project.is_hosted ? 'Yes' : 'No'}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
