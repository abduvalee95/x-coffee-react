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
import { error, log } from "console";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enum/product.enum";

/*//*                  REDUX SLICE & SLECTOR */

const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
  //command yozvolyabvmiz                             bu reduser : yani comanndamizni reducer orqali ishga oshiryabmiz
});
export default function HomePage() {
  //3: Selector: Store => Data   storedan kerakli datani qabul qiladi
  const { setPopularDishes } = actionDispatch(useDispatch());

  useEffect(() => {
    //1: Backend server data request => Data , datalarni qabul qilamiz

    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "productView",
        productCollection: ProductCollection.DISH,
      })
      .then((data) => {

        setPopularDishes(data);
      })
      .catch((error) => console.log("Error, useEffect", error));
    //2: Slice: Data => Store, qabul qilgan datani Storega yozamiz
  }, []);
// selector orqalik qabul qilingan malumotni bu componentlarimizda ishlatishimiz mumkin 
  return (
    // bu Homepage Screen componenti shu section lardan iborat
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
