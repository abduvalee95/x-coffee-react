import React from "react";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Stack } from "@mui/material";

//!    redux imports
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { retrievePausedOrders } from "./selector";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";
import { Order, OrderItem } from "../../../lib/types/orders";

/*//*                  REDUX SLICE & SLECTOR */

const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({ pausedOrders })
);

export default function PausedOrders() {
  const { pausedOrders } = useSelector(pausedOrdersRetriever);

  return (
    <TabPanel value={"1"}>
      <Stack>
        {pausedOrders?.map((order: Order) => {
          return (
            <Box key={order._id} className="order-main-box">
              <Box className="order-box-scroll">
                {order?.orderItems?.map((item: OrderItem) => {
                  const product: Product = order.productData.filter(
                    (ele: Product) => item.productId === ele._id
                  )[0];
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  return (
                    <Box key={item._id} className="orders-name-price">
                      <img
                        src={imagePath}
                        alt="img"
                        className="order-dish-img"
                      />
                      <p className="title-dish">{product.productName}</p>
                      <Box className="price-box">
                        <p>${item.itemPrice}</p>
                        <img src="/icons/close.svg" alt="icon" />
                        <p>{item.itemQuantity}</p>
                        <img src="/icons/pause.svg" alt="icon" />
                        <p style={{ marginLeft: "15px" }}>
                          ${item.itemQuantity * item.itemPrice}
                        </p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>

              <Box className="total-price-box">
                <Box className="box-total">
                  <p>Product price</p>
                  <p>${order.orderTotal - order.orderDelivery}</p>
                  <img src="/icons/pause.svg" alt="icon" />
                  <p>Delivery Cost</p>
                  <p>${order.orderDelivery}</p>
                  <img
                    src="icons/pause.svg"
                    alt="icon"
                    style={{ marginLeft: "20px" }}
                  />
                  <p>Total Price</p>
                  <p>${order.orderTotal}</p>
                </Box>
                <Button
                  className="cancel-button"
                  color="secondary"
                  variant="contained"
                >
                  Cancel
                </Button>
                <Button className="pay-button" variant="contained">
                  Payment
                </Button>
              </Box>
            </Box>
          );
        })}
        {!pausedOrders ||
          (pausedOrders.length === 0 && (
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
            >
              <img
                src="/icons/noimage-list.svg"
                alt="noimg"
                style={{ width: 300, height: 300 }}
              />
            </Box>
          ))}
      </Stack>
    </TabPanel>
  );
}
