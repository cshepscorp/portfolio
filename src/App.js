import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
//import blue from '@mui/material/colors/blue';
import About from './pages/About';
import FixedBottomNavigation from './components/FixedBottomNavigation';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <FixedBottomNavigation />
    </ThemeProvider>
  );
}

export default App;
