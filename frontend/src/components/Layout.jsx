import React from 'react';
import { Link } from 'react-router-dom';
import { RiLinkedinBoxLine, RiGithubLine, RiInstagramLine } from 'react-icons/ri';
import PropTypes from 'prop-types';
import '../styles.css'; // Import global styles

const Layout = ({ children }) => {
  return (
    <>
      <nav>
        <div className="nav-logo">
          <Link to="/">
            <img src={'../images/logo1.png'} alt="SamVPortfolio" />
          </Link>
        </div>
        <ul className="nav-links">
          <li className="link"><Link to="/">Home</Link></li>
          <li className="link"><Link to="/about">About</Link></li>
          <li className="link"><Link to="/projects">Projects</Link></li>
          <li className="link"><Link to="/contact">Contact Me</Link></li>
        </ul>
        <Link to="/hireme">
          <button className="btn" type="button">Hire Me</button>
        </Link>
      </nav>

      <main>{children}</main>

      <footer className="container">
        <span className="blur"></span>
        <span className="blur"></span>
        <div className="column">
          <div className="logo">
            <img src={'../images/logo1.png'} alt="Logo" />
          </div>
          <p>
            Thank you for visiting my portfolio! Stay connected with me through my social media channels and feel free to reach out for collaborations, job opportunities, or just to say hello...
          </p>
          <div className="social">
            <a href="https://www.linkedin.com/in/samarth-vohra-480084256/" target="_blank" rel="noopener noreferrer"><RiLinkedinBoxLine /></a>
            <a href="https://github.com/samvlp03" target="_blank" rel="noopener noreferrer"><RiGithubLine /></a>
            <a href="https://www.instagram.com/samv_lp_03" target="_blank" rel="noopener noreferrer"><RiInstagramLine /></a>
          </div>
          <div className="copyright">
            &copy; 2024 Samarth Vohra. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
// This is the Layout component that wraps around the main content of the application.
// This is the Layout component that wraps around the main content of the application.