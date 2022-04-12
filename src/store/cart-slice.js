import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.item.find((item) => item.itemId === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.item.push({
          itemId: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      console.log("id:-" +id)
      const existingItem = state.item.find((item) => item.itemId === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.item = state.item.filter((item) => item.itemId  !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
