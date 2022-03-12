import logo from './logo.svg';
import './App.css';
import Box from '@mui/material/Box';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
//import blue from '@mui/material/colors/blue';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import FixedBottomNavigation from './components/FixedBottomNavigation';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ pb: 12 }}>
        <Router>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </Router>
        <FixedBottomNavigation />
      </Box>
    </ThemeProvider>
  );
}

export default App;
