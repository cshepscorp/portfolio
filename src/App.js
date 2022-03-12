import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//import blue from '@mui/material/colors/blue';
import NavBar from './components/NavBar';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import FixedBottomNavigation from './components/FixedBottomNavigation';

// const theme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

function App() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Router>
        <NavBar />
        <main className="container mx-auto px-3 pb-12">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        {/* <FixedBottomNavigation /> */}
      </Router>
    </div>
  );
}

export default App;
