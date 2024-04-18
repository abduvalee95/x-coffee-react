import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";

//!     Css
import "../../../css/home.css";

//!    redux imports
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { setPopularDishes } from "./slice";
import { retrieveNewDishes, retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import { log } from "console";

/*//*                  REDUX SLICE & SLECTOR */

const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
  //command yozvolyabvmiz                             bu reduser : yani comanndamizni reducer orqali ishga oshiryabmiz
});

const popularDishesRetrieve = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes })
);

export default function HomePage() {
  //3: Selector: Store => Data   storedan kerakli datani qabul qiladi
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetrieve);

  useEffect(() => {
    //1: Backend server data request => Data , datalarni qabul qilamiz
    const results = [
      {
        _id: "65f982c1772a446db314baa3",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "Steak",
        productPrice: 17,
        productLeftCount: 40,
        productSize: "SMALL",
        productVolume: 1,
        productDesc: "this is to Steak",
        productImages: [
          "uploads/products/55e9e870-2aff-4c1d-a4a8-66f8aad12310.png",
          "uploads/products/e7786e00-550f-4574-9f93-5a87081fe825.png",
        ],
        productViews: 0,
        createdAt: "2024-03-19T12:19:13.368Z",
        updatedAt: "2024-03-21T11:36:39.878Z",
        __v: 0,
      },
      {
        _id: "65f9827a772a446db314baa0",
        productStatus: "PROCESS",
        productCollection: "DISH",
        productName: "Steak",
        productPrice: 10,
        productLeftCount: 15,
        productSize: "NORMAL",
        productVolume: 1,
        productDesc: "so delicious Steak",
        productImages: [
          "uploads/products/84c2a5fa-a60f-4415-baea-bd6b4bed2f4e.png",
          "uploads/products/2b77b444-06fb-4886-86ec-0c37a9345cd4.png",
          "uploads/products/6dafca29-4ea8-4499-b6d5-17d8f687fa4e.png",
          "uploads/products/48c9be9f-8e68-49f9-bd0c-9027093e5f29.png",
          "uploads/products/247ac54c-e1a5-4686-b32a-7affc9dcfc25.png",
        ],
        productViews: 6,
        createdAt: "2024-03-19T12:18:02.589Z",
        updatedAt: "2024-04-11T22:41:52.258Z",
        __v: 0,
      },
    ];

    //2: Slice: Data => Store, qabul qilgan datani Storega yozamiz

    //@ts-ignore
    setPopularDishes(results); // backandan kelgan malumotni dispatch orqali setPopularDishesga datani  payload qilyabmiz
  }, []);
console.log(popularDishes)

  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
