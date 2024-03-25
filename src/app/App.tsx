import React from 'react';
import '../css/app.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { RippleBadge } from './MaterialTheme/styled';
import { Link, Route, Router, Switch } from 'react-router-dom';
import {  HomePage } from './screens/homePage';
import { ProductsPage } from './screens/productsPage';
import { OrderPage } from './screens/ordersPage';
import { UserPage } from './screens/userPage';

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
              <Link to="/">HomePage</Link>
            </li>
            <li>
              <Link to="/products">ProductsPage</Link>
            </li>
            <li>
              <Link to="/orders">OrdersPage</Link>
            </li>
            <li>
              <Link to="/member-page">UsersPage</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/products">
            <ProductsPage />
          </Route>
          <Route path="/orders">
            <OrderPage/>
          </Route>
          <Route path="/member-page">
            <UserPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
  );
}





export default App;
