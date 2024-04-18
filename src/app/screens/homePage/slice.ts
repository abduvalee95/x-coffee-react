import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";

const initialState: HomePageState = {
  popularDishes: [],
  newDishes: [],
  topUsers: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    // reduserga state va action beriladi  state initialstate , Action index.tsx useEffect data actioni ichida payload qismida keladi saqlamoqchi bolgan datamiz
    setPopularDishes: (state, action) => {
      state.popularDishes = action.payload; // dan kirib keladyotgan malumotni  initialStateda joylashgan Popular dishesni keylarini Valusiga tenglashdir !
    },
    setNewDishes: (state, action) => {
      state.newDishes = action.payload;
    },
    setTopUsers: (state, action) => {
      state.topUsers = action.payload;
    },
  },
});

export const { setPopularDishes, setNewDishes, setTopUsers } =
  homePageSlice.actions;

// Storeni boglash uchun export 
const HomePageReduser = homePageSlice.reducer;
export default HomePageReduser