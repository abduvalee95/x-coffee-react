import React from "react";
import Button from "@mui/material/Button";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Stack } from "@mui/material";
import moment from "moment";
//!    redux imports
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { retrieveProcessOrders } from "./selector";
import { Product } from "../../../lib/types/product";
import { Messages, serverApi } from "../../../lib/config";
import { Order, OrderItem, OrderUpdateInput } from "../../../lib/types/orders";
import { useGlobals } from "../../hooks/useGlobals";
import { T } from "../../../lib/types/common";
import { OrderStatus } from "../../../lib/enum/order.enum";
import OrderService from "../../services/OrderService";
import { sweetErrorHandling } from "../../../lib/sweetAlert";

/*//*                  REDUX SLICE & SLECTOR */

const proccessOrdersRetriever = createSelector(
  retrieveProcessOrders,
  (processOrders) => ({ processOrders })
);

interface ProccessOrderProps {
  setValue: (input: string) => void;
}

export default function ProcessOrders(props: ProccessOrderProps) {
  const { setValue } = props;
  const { authMember, setOrderBuilder } = useGlobals();
  const { processOrders } = useSelector(proccessOrdersRetriever);

  //*                  HANDLERS     */

  const finishOrderHandler = async (e: T) => {
    try {
      if (!authMember) throw new Error(Messages.error2);

      //* PAYMENT

      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.FINISH,
      };
      // sweetCancelProvider()
      const confirmaion = window.confirm("Have YOU  Recieved your Order ? ");
      if (confirmaion) {
        const order = new OrderService();
        await order.updatedOrder(input);
        setValue("3");
        setOrderBuilder(new Date()); //orderlar delete bolganda osha vcaqtida pageni yangilab olyabmiz
      }
    } catch (error) {
      console.log(error);
      sweetErrorHandling(error).then();
    }
  };

  return (
    <TabPanel value={"2"}>
      <Stack>
        {processOrders?.map((order: Order) => {
          return (
            <Box key={order._id} className="order-main-box">
              <Box className="order-box-scroll">
                {order?.orderItems?.map((item) => {
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
                        <p>{item.itemQuantity} </p>
                        <img src="/icons/pause.svg" alt="icon" />
                        <p style={{ marginLeft: "15px" }}>
                          ${item.itemPrice * item.itemQuantity}
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
                <p className={"data-compl"}>
                  {moment().format("YY-MM-DD HH:mm")}
                </p>
                <Button
                  value={order._id}
                  className={"verify-button"}
                  variant="contained"
                  onClick={finishOrderHandler}
                >
                  Verify to fulfil
                </Button>
              </Box>
            </Box>
          );
        })}

        {!processOrders ||
          (processOrders.length === 0 && (
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
