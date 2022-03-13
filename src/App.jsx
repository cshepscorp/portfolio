import './App.css';
import GitHubIcon from '@mui/icons-material/GitHub';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import blue from '@mui/material/colors/blue';
import NavBar from './components/NavBar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import GithubIconLink from './components/GithubIconLink';

function App() {
  return (
    <Router>
      <NavBar />
      <main className="container mx-auto px-3 pb-12">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <GithubIconLink />
      </main>
    </Router>
  );
}

export default App;
