import Box from '@mui/material/Box';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import RestoreIcon from '@mui/icons-material/Restore';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import WorkIcon from '@mui/icons-material/Work';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';

function FixedBottomNavigation() {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  return (
    <>
      <CssBaseline />
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Projects"
            icon={<WorkIcon />}
            onClick={() => navigate('/portfolio')}
          />
          <BottomNavigationAction
            label="Home"
            icon={<HomeIcon />}
            onClick={() => navigate('/')}
          />
          <BottomNavigationAction
            label="Contact"
            icon={<ContactPageIcon />}
            onClick={() => navigate('/contact')}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
}

export default FixedBottomNavigation;
