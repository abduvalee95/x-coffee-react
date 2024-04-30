import { useState, SyntheticEvent, useEffect } from "react";
import { Container, Stack, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
//!    redux imports
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPausedOrders, setProcessOrders, setFinishedOrders } from "./slice";

import { Member } from "../../../lib/types/member";

import "../../../css/order.css";
import { Order } from "../../../lib/types/orders";

/*//*                  REDUX SLICE & SLECTOR */

const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});

export default function OrderPage() {
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispatch(useDispatch());
  const [value, setValue] = useState("1");

  /*//*                  HANDLERS   */

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="order-page">
      <Container className="order-container">
        <Stack className="order-left">
          <TabContext value={value}>
            <Box className="order-nav-frame">
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className="table-list"
                >
                  <Tab label="PAUSED ORDERS" value={"1"} />
                  <Tab label="PROCESS ORDERS" value={"2"} />
                  <Tab label="FINISHED ORDERS" value={"3"} />
                </Tabs>
              </Box>
            </Box>
            <Stack className="order-main-content">
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className="order-right">
          <Box className="order-info-box">
            <Box className="order-user-img">
              <div className={"order-user-img"}>
                <img src={"/img/justin.webp"} className={"order-user-avatar"} />
                <div className={"order-user-icon-box"}>
                  <img src={"/icons/user-badge.svg"} />
                </div>
              </div>

              <span className="order-user-name">Leo</span>
              <span className="order-user-prof">User</span>
            </Box>
            <Box className="liner"></Box>
            <Box className="order-user-adress">
              <div style={{ display: "flex" }}>
                <LocationOnIcon />
                Hongcheon Kangwon-Do
              </div>
            </Box>
          </Box>
          {/* card */}
          <Box className="order-info-box">
            <Box className="card-input">Card number : 45465362554</Box>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              width={"100%"}
              justifyContent={"space-between"}
            >
              <Box className="card-half-input"> 01 / 28</Box>
              <Box className="card-half-input">CVV : 492</Box>
            </Stack>
            <Box className="card-input">Leo Leopard </Box>
            <Box className="cards-box">
              <img src="/icons/visa-card.svg" alt="" />
              <img src="/icons/master-card.svg" alt="" />
              <img src="/icons/paypal-card.svg" alt="" />
              <img src="/icons/western-card.svg" alt="" />
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
