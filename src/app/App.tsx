import React from 'react';
import '../css/app.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { RippleBadge } from './MaterialTheme/styled';
import { orange } from '@mui/material/colors';

function App() {
  return ( 
  <Container sx={{background:'orange'}}>
    <Stack flexDirection={"column"}>
      <Box sx={{my:4}}>
        <Typography variant='h4' component={'h4'}  >
          Creaty React app  on Typescript & Redux
        </Typography>
      </Box>
    <Box>
      <RippleBadge badgeContent={4} >
        <Button variant='contained'> unread msg </Button>
      </RippleBadge>
    </Box>
    </Stack>
  </Container>
  );
}

export default App;
