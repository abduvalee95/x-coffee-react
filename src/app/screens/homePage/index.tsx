import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";
//!    redux imports
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { setNewDishes, setPopularDishes, setTopUsers } from "./slice";
import { retrieveNewDishes, retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import { error, log } from "console";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enum/product.enum";
import MemberService from "../../services/MemberService";
import { Member } from "../../../lib/types/member";
//!     Css
import "../../../css/home.css";

/*//*                  REDUX SLICE & SLECTOR */

const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
  setNewDishes: (data: Product[]) => dispatch(setNewDishes(data)),
  setTopUsers: (data: Member[]) => dispatch(setTopUsers(data)),

  //command yozvolyabvmiz                             bu reduser : yani comanndamizni reducer orqali ishga oshiryabmiz
});
export default function HomePage() {
  //3: Selector: Store => Data   storedan kerakli datani qabul qiladi
  const { setPopularDishes, setNewDishes, setTopUsers } = actionDispatch(
    useDispatch()
  );

  useEffect(() => {
    //1: Backend server data request => Data , datalarni qabul qilamiz

    const product = new ProductService();
    //2: Slice: Data => Store, qabul qilgan datani Storega yozamiz
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

    product
      .getProducts({
        page: 1,
        limit: 4,
        order: "createdAt",
        // productCollection: ProductCollection.DISH,
      })
      .then((data) => {
        setNewDishes(data);
      })
      .catch((error) => console.log("Error, SetNewDishes", error));

    const member = new MemberService();

    member
      .getTopUsers()
      .then((data) => setTopUsers(data))
      .catch((error) => console.log("Error topUser:", error));
  }, []);

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
