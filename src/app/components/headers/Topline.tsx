import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@fontsource/pacifico';

function appBarLabel(label: string) {
  return (
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
   <Typography variant="body1" noWrap component="div" sx={{ mr: 2 }}>
        Opening time: 8:00 to 18:00
      </Typography>
      </IconButton>

      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center',}}>
        <IconButton color="inherit">
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit">
          <TwitterIcon />
        </IconButton>
        <IconButton color="inherit">
          <InstagramIcon />
        </IconButton>
        <IconButton color="inherit">
          <LinkedInIcon />
        </IconButton>
      </Box>
      <IconButton edge="end" color="inherit" aria-label="location">
              <LocationOnIcon />
              <Typography>
                   Seoul, Inchon-si Bupyongdon 
              </Typography>  
      </IconButton>
    </Toolbar>
  );
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
        },
    
    },
    typography: {
        fontFamily: '"Pacifico", cursive', // Applying the Pacifico font
      },
});

export default function EnableColorOnDarkAppBar() {
  return (
    <Stack spacing={2} sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={darkTheme}>
        <AppBar position="static" color="primary" sx={{ mb: 2 }}>
          {appBarLabel('x-coffee')}
        </AppBar>
      </ThemeProvider>
    </Stack>
  );
}
