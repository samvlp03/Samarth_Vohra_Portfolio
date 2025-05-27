import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import HireMe from './pages/HireMe';
import Skills from './pages/Skills';
import Certificates from './pages/Certificates';
import './styles.css'; // Import global styles
// Import About, Projects, Contact, HireMe when ready

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hireme" element={<HireMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
// This is the main App component that sets up the router and layout for the application.
// It uses React Router to manage navigation between different pages of the portfolio.