import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

// homePagega dahldor bolgan storeni qolga olvolamiz
const selectOrdersPage = (state: AppRootState) => state.ordersPage;

// retrieve qilishda foydalanamiz
export const retrievePausedOrders = createSelector(
  selectOrdersPage,
  (OrderPage) => OrderPage.pausedOrders //selector esa olgan detani olib beryabti
);

export const retrieveProcessOrders = createSelector(
  selectOrdersPage,
  (OrderPage) => OrderPage.processOrders
);

export const retrieveFinishedOrders = createSelector(
  selectOrdersPage,
  (OrderPage) => OrderPage.finishedOrders
);
