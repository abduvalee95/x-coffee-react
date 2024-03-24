import React from 'react';
import '../css/app.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { RippleBadge } from './MaterialTheme/styled';
import { Link, Route, Router, Switch } from 'react-router-dom';
import { Users } from './MaterialTheme/screens/Users';
import { About } from './MaterialTheme/screens/About';

/* 
function App() {
  return ( 
  <Container sx={{background:'orange'}}>
    <Stack flexDirection={"column"}>
      <Box sx={{my:8}}>
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
*/

export function App() {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}




export default App;
