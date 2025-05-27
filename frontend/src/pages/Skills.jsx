import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axios.get('/api/about/skills');
        setSkills(Array.isArray(res.data) ? res.data : [res.data]);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };
    fetchSkills();
  }, []);

  return (
    <div className="container">
      <h1>Skills</h1>
      {skills.length > 0 ? (
        <ul>
          {skills.map((skill, index) => (
            <li key={skill._id || skill.id || index}>
              <h3>{skill.skill_name || skill.name}</h3>
              <p>{skill.description || skill.desc}</p>
              <br></br>
            </li>
          ))}
        </ul>
      ) : (
        <p>No skills available.</p>
      )}
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
        <button onClick={() => navigate('/about')}>Back to About</button>
        <button onClick={() => navigate('/certificates')}>Go to Certificates</button>
      </div>
    </div>
  );
};

export default Skills;
