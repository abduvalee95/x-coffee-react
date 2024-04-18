import { createSelector } from "reselect";
import { AppRootState } from "../../../lib/types/screen";

// homePagega dahldor bolgan storeni qolga olvolamiz
const selectHomePage = (state: AppRootState) => state.homePage;

// retrieve qilishda foydalanamiz
export const retrievePopularDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.popularDishes //selector esa olgan detani olib beryabti 
);

export const retrieveNewDishes = createSelector(
  selectHomePage,
  (HomePage) => HomePage.newDishes
);

export const retrieveTopUsers = createSelector(
  selectHomePage,
  (HomePage) => HomePage.topUsers
);
