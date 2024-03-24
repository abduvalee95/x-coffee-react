import React from 'react';
import '../css/app.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';

function App() {
  return ( 
  <Container maxWidth="sm">
    <Stack flexDirection={"column"}>
      <Box sx={{my:4}}>
        <Typography variant='h4' component={'h4'}  >
          Creaty React app  on Typescript & Redux
        </Typography>
      <Button variant='contained'> Contained Button </Button>
      </Box>
      <Button variant='outlined'> Contained Button </Button>
      <Button variant='outlined' color='error'> Contained Button </Button>
    </Stack>
  </Container>
  );
}

export default App;
