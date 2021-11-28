import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },

    deleteProduct: (state, action) => {
      let indexDelete = state.products.findIndex(p => p._id === action.payload);
      console.log(indexDelete);
      state.products.splice(indexDelete, 1);
      state.quantity -= 1;
      state.total = state.products.reduce((acc, item) => acc + item.price * item.quantity, 0)
    },

    addQty: (state, action) => {
      let index = state.products.findIndex(p => p._id === action.payload);
      state.products[index].quantity +=1;
      state.total = state.products.reduce((acc, item) => acc + item.price * item.quantity, 0)
    },

    removeQty: (state, action) => {
      let index = state.products.findIndex(p => p._id === action.payload);
      state.products[index].quantity -=1;
      state.total = state.products.reduce((acc, item) => acc + item.price * item.quantity, 0)
    }
  },
});

export const { addProduct, deleteProduct, addQty, removeQty } = cartSlice.actions;
export default cartSlice.reducer;
