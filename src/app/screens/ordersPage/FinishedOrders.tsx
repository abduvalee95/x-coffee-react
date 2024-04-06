import React from "react";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Stack } from "@mui/material";

export default function FinishedOrders() {
  return (
    <TabPanel value={"3"}>
      <Stack>
        {[1, 2].map((ele, index) => {
          return (
            <Box key={index} className="order-main-box">
              <Box className="order-box-scroll">
                {[1, 2].map((ele2, index2) => {
                  return (
                    <Box key={index2} className="orders-name-price">
                      <img
                        src="/img/kebab.webp"
                        alt="img"
                        className="order-dish-img"
                      />
                      <p className="title-dish">Kebab</p>
                      <Box className="price-box">
                        <p>$14</p>
                        <img src="/icons/close.svg" alt="icon" />
                        <p>2</p>
                        <img src="/icons/pause.svg" alt="icon" />
                        <p style={{ marginLeft: "15px" }}>$28</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              <Box className="total-price-box">
                <Box className="box-total">
                  <p>Product price</p>
                  <p>$28</p>
                  <img src="/icons/pause.svg" alt="icon" />
                  <p>Delivery Cost</p>
                  <p>$8</p>
                  <img
                    src="icons/pause.svg"
                    alt="icon"
                    style={{ marginLeft: "20px" }}
                  />
                  <p>Total Price</p>
                  <p>$36</p>
                </Box>
              </Box>
            </Box>
          );
        })}
        {false && (
          <Box display={"flex"} flexDirection={"row"} justifyContent={"center"}>
            <img
              src="/icons/noimage-list.svg"
              alt="noimg"
              style={{ width: 300, height: 300 }}
            />
          </Box>
        )}
      </Stack>
    </TabPanel>
  );
}
