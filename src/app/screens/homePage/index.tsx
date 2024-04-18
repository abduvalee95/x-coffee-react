import React, { useEffect } from "react";
import Statistics from "./Statistics";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Events from "./Events";

//!     Css
import "../../../css/home.css";


export default function HomePage() {
  
  //3: Selector: Store => Data   storedan kerakli datani qabul qiladi 
  

  useEffect(() => {
    //1: Backend server data request => Data , datalarni qabul qilamiz 


    //2: Slice: Data => Store, qabul qilgan datani Storega yozamiz 

  }, []);

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
