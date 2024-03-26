import React from 'react';
import '../css/app.css';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { RippleBadge } from './MaterialTheme/styled';
import { Link, Route, Router, Switch, useLocation } from 'react-router-dom';
import {  HomePage } from './screens/homePage';
import { ProductsPage } from './screens/productsPage';
import { OrderPage } from './screens/ordersPage';
import { UserPage } from './screens/userPage';
import { log } from 'console';
import { HomeNavbar } from './components/header/HomeNavbar';
import { OtherNavbar } from './components/header/OtherNavbar';
import { Footer } from './components/footer';

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
  const location = useLocation();
  console.log( "location",location);
  
  return (
      <>
      {location.pathname === "/"? <HomeNavbar /> : <OtherNavbar /> }
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
        <Footer />
      </>
  );
}





export default App;
