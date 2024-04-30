import { Member } from "./member";
import { Order } from "./orders";
import { Product } from "./product";

/*//*                        REACT APP STATE */

// bu erda stateni yozyabmiz

export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState;
  ordersPage: OrdersPageState;
}

// biz bu erda sitezlayabmiz guruhlayabmiz guruhlarimizga, Analiz: tegishli bolgan mayda typelarni boshqa file larda mujasam qilyabmiz

// defination Qismi

/*//*                        HOMEPAGE */

export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/*//*                        PRODUCTPAGE */
export interface ProductsPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

/*//*                        ORDERSPAGE */

export interface OrdersPageState {
  pausedOrders: Order[];
  processOrders: Order[];
  finishedOrders: Order[];
}
