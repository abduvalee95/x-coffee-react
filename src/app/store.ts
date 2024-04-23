import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import HomePageReduser from "./screens/homePage/slice";
import reduxLogger from "redux-logger"
import ProductPageReduser from "./screens/productsPage/slice";


export const store = configureStore({

  middleware: (getDefaultMiddleware) =>
    //@ts-ignore
    getDefaultMiddleware().concat(reduxLogger),
  // qanday ishlar amalga owirilyatganini log qilib beradi 
  
  reducer: {
    // homepageni ichidagi Slice bn Reduser Storega boglandi
    homePage: HomePageReduser,
    productsPage:ProductPageReduser
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
