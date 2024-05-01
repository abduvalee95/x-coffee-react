import React from "react";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Stack } from "@mui/material";

//!    redux imports
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { retrievePausedOrders } from "./selector";
import { Product } from "../../../lib/types/product";
import { Messages, serverApi } from "../../../lib/config";
import { Order, OrderItem, OrderUpdateInput } from "../../../lib/types/orders";
import { T } from "../../../lib/types/common";
import {
  sweetCancelProvider,
  sweetErrorHandling,
} from "../../../lib/sweetAlert";
import { OrderStatus } from "../../../lib/enum/order.enum";
import { useGlobals } from "../../hooks/useGlobals";
import OrderService from "../../services/OrderService";

/*//*                  REDUX SLICE & SLECTOR */

const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({ pausedOrders })
);
interface PausedOrderProps {
  setValue: (input: string) => void;
}

export default function PausedOrders(props: PausedOrderProps) {
  const { setValue } = props;
  const { authMember, setOrderBuilder } = useGlobals();
  const { pausedOrders } = useSelector(pausedOrdersRetriever);

  //*                  HANDLERS     */

  const deleteOrderHandler = async (e: T) => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      //qaysi orderni cancel qilishni qabul qilish Logic
      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.DELETE,
      };
      // sweetCancelProvider()
      const confirmaion = window.confirm("Do You Want to Delete this Order");
      if (confirmaion) {
        const order = new OrderService();
        await order.updatedOrder(input);
        setOrderBuilder(new Date()); //orderlar delete bolganda osha vcaqtida pageni yangilab olyabmiz
      }
    } catch (error) {
      console.log(error);
      sweetErrorHandling(error).then();
    }
  };

  //*  Paused order To Process

  const proccessOrderHandler = async (e: T) => {
    try {
      if (!authMember) throw new Error(Messages.error2);

      //* PAYMENT

      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.PROCESS,
      };
      // sweetCancelProvider()
      const confirmaion = window.confirm(
        "Do You Want to Procced this Payment? "
      );
      if (confirmaion) {
        const order = new OrderService();
        await order.updatedOrder(input);
        setValue("2")
        setOrderBuilder(new Date()); //orderlar delete bolganda osha vcaqtida pageni yangilab olyabmiz
      }
    } catch (error) {
      console.log(error);
      sweetErrorHandling(error).then();
    }
  };

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
                  value={order._id}
                  className="cancel-button"
                  color="secondary"
                  variant="contained"
                  onClick={deleteOrderHandler}
                >
                  Cancel
                </Button>

                <Button
                  value={order._id}
                  className="pay-button"
                  variant="contained"
                  onClick={proccessOrderHandler}
                >
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
