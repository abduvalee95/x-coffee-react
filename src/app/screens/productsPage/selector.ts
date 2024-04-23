import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";
import Producds from "./Products";
import ProductsPage from ".";

const selectProductsPage = (state: AppRootState) => state.productPage;

export const retrieveRestaurant = createSelector(
  selectProductsPage,
  (ProductPage) => ProductPage.restaurant
);

export const retrieveChosenProduct = createSelector(
  selectProductsPage,
  (ProductsPage) => ProductsPage.chosenProduct
);

export const retrieveProducts = createSelector(
  selectProductsPage,
  (ProductsPage) => ProductsPage.products
);
