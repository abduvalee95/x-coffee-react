import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import React, { useState, useEffect } from "react";
import { log } from "console";
import { CartItem } from "../../../lib/types/search";

interface HomeNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  setSignupOpen: (isOpen: boolean) => void;
  setLoginOpen: (isOpen: boolean) => void;
}

export default function HomeNavbar(props: HomeNavbarProps) {
  const { cartItems, onAdd, onDelete, onDeleteAll, onRemove,setSignupOpen,setLoginOpen } = props;
  const authMember = null;

  const [count, setCount] = useState<number>(0),
    [value, setValue] = useState<boolean>(true); // button bosilganda qiymati ozgaryabti True bolsa false false bolsa true ga ozgaryabti

  useEffect(() => {
    console.log("commponentDidmount"); // data Fetch qilamiz
    setCount(count + 1);

    // return orqalik component willUnmount ni iwlatishimiz mm
    return () => {
      console.log("componentWillUnMount");
    };
  }, [value]); // bunda calback function hamda arraydependency bor "nimani qymati ozgarganda ishga tushsin "
  //valueni qiymati ozgarganligi sababli useEffect yana ishga tuwub beradi
  // doim birmarta ishga tushadi  arraydependencyga malum bir valueni qymatni kiritsak  aynan valueni qiymati opzgargan vaqtda ishga tuwiw  mexanizmni qurib beradi;
  // Valueni qiymati ozgarganda componentimiz yana ishga tushadi
  const buttonHandler = () => {
    setValue(!value);
  };

  /* Hendlers  */
  // count nomli qiymatni hozil qilib ber boshlangich qiymati (0) bolsin
  //   const [count, setCount] = useState<number>(0);
  // setcount dan foydalanamiz button bosilganda qiymatmiz ozgarish kk

  // 2chi variant

  /*  
 const buttonHandler = () => {
    setCount(count + 2);
}; 
*/

  return (
    <div className="home-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box>
            <NavLink to="/">
              <img className="brand-logo" src="/icons/burak.svg" />
            </NavLink>
          </Box>

          <Stack
            className="links" // vertical
          >
            <Box className={"hover-line"}>
              <NavLink to="/" activeClassName={"underline"}>
                Home
              </NavLink>
            </Box>

            <Box className={"hover-line"}>
              <NavLink to="/products" activeClassName={"underline"}>
                Products
              </NavLink>
            </Box>

            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/orders" activeClassName={"underline"}>
                  Orders
                </NavLink>
              </Box>
            ) : null}

            {authMember ? (
              <Box className={"hover-line"}>
                <NavLink to="/member-page" activeClassName={"underline"}>
                  MyPage
                </NavLink>
              </Box>
            ) : null}

            <Box className={"hover-line"}>
              <NavLink to="/help" activeClassName={"underline"}>
                Help
              </NavLink>
            </Box>
            <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              onDeleteAll={onDeleteAll}
            />
            {!authMember ? (
              <Box>
                <Button variant="contained" className="login-button"
                 onClick={()=>setLoginOpen(true)}
                 >
                  {" "}
                  Login{" "}
                </Button>
              </Box>
            ) : (
              <img
                className="user-avatar"
                src={"/icons/default-user.svg"}
                aria-haspopup={"true"}
              />
            )}
          </Stack>
        </Stack>
        <Stack className={"header-frame"}>
          <Stack className={"detail"}>
            <Box className={"head-main-txt"}>
              World's Most Delicious Cousine
            </Box>
            <Box className={"wel-txt"}>The Choice, not just a choice</Box>
            <Box className={"service-txt"}> 24 hours service
            </Box>
            <Box className={"signup"}>
              {!authMember ? (
                <Button
                  variant="contained"
                  className={"signup-button"}
                 onClick={()=>setSignupOpen(true)}
                >
                  SIGN UP
                </Button>
              ) : null}
            </Box>
          </Stack>
          <Box className={"logo-frame"}>
            <div className={"logo-img"}></div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
