import { createSlice } from "@reduxjs/toolkit";
import { OrdersPageState } from "../../../lib/types/screen";

const initialState: OrdersPageState = {
  pausedOrders: [],
  processOrders: [],
  finishedOrders: [],
};

const ordersPageSlice = createSlice({
  name: "ordersPage",
  initialState,
  reducers: {
    // reduserga state va action beriladi  state initialstate , Action index.tsx useEffect data actioni ichida payload qismida keladi saqlamoqchi bolgan datamiz
    setPausedOrders: (state, action) => {
      state.pausedOrders = action.payload; // dan kirib keladyotgan malumotni  initialStateda joylashgan Popular dishesni keylarini Valusiga tenglashdir !
    },
    setProcessOrders: (state, action) => {
      state.processOrders = action.payload;
    },
    setFinishedOrders: (state, action) => {
      state.finishedOrders = action.payload;
    },
  },
});

export const { setPausedOrders, setProcessOrders, setFinishedOrders } =
  ordersPageSlice.actions;

// Storeni boglash uchun export
const OrdersPageReduser = ordersPageSlice.reducer;
export default OrdersPageReduser;
