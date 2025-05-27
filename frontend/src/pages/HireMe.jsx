import React from 'react';

const HireMe = () => {
  const baseUrl = 'http://localhost:5000/api/files/cv';

  return (
    <div className="hiring container">
      <h1>Welcome to My Profile</h1>
      <p>Here, you can view or download my CV.</p>
      <button onClick={() => window.open(baseUrl, '_blank')}>
        View My CV
      </button>
      <button onClick={() => window.open(`${baseUrl}?download=true`, '_blank')}>
        Download My CV
      </button>

      <p>
        If you wish to contact me, please visit the{' '}
        <a href="/contact">Contact Page</a>.
      </p>

      <h2>Why I Should Be Hired</h2>
      <p>
        I am a dedicated professional with a proven track record of success in
        my field. My skills, experience, and passion for the industry make me a
        valuable asset to any team. I bring a unique blend of technical
        expertise and creative problem-solving abilities, ensuring that I can
        tackle any challenge that comes my way. I am committed to continuous
        learning and improvement, and I am eager to contribute to your
        company's success.
      </p>
    </div>
  );
};

export default HireMe;
