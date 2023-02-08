import { createSlice } from "@reduxjs/toolkit";
let ara = [];
for (let i = 0; i <= 21; i++) {
  ara[i] = 0;
}
const initialState = {
  cartt: [],
  price: 0,
  ara,
  cartquan: 0,
};
const slicecart = createSlice({
  name: "cartt",
  initialState,
  reducers: {
    Addtocart: (state, action) => {
      const x = state.cartt.find((item) => item.id === action.payload.id);
      if (x) {
        state.cartt = [...state.cartt];
      } else state.cartt = [...state.cartt, action.payload];
    },

    addquan1: (state, action) => {
      state.ara[action.payload]++;
      state.ara = [...state.ara];
      console.log(state.ara);
      state.cartquan++;
    },
    remove: (state, action) => {
      if (state.ara[action.payload] > 1) {
        state.ara[action.payload]--;
      } else {
        let newcart = state.cartt.filter((item) => item.id !== action.payload);
        state.cartt = [...newcart];
      }
      state.cartquan--;
    },
    gettotal: (state, action) => {
      state.cartt.forEach((item) => {});
    },
    quancount: (state, action) => {
      state.ara[action.payload.ite] = +action.payload.tar;
      if (state.ara[action.payload.ite] === 0) {
        let newcart = state.cartt.filter(
          (item) => item.id !== action.payload.ite
        );
        state.cartt = [...newcart];
      }
      let total = 0;
      for (let i = 0; i < state.ara.length; i++) {
        total += state.ara[i];
      }
      state.cartquan=total;
    },
  },
});
export const { Addtocart, remove, addquan1, quancount } = slicecart.actions;
export default slicecart.reducer;
