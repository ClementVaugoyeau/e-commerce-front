import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,

  reducers: {
    addItemToBasket: (state, action) => {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      let existingCartItem = state.items[existingCartItemIndex];

      if (existingCartItem) {
        state.items[existingCartItemIndex].quantity += 1;
      } else {
        state.items = [
          ...state.items,
          {
            id: action.payload.id,
            name: action.payload.name,
            price: action.payload.price,
            category: action.payload.category,
            img: action.payload.img,
            quantity: action.payload.quantity,
          },
        ];
      }
    },
    removeItemFromBasket: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    increaseItemQuantityFromBasket: (state, action) => {
      console.log('increase');
      // state.items[existingCartItemIndex].quantity += 1;
    },
  },
});

export const { addItemToBasket, removeItemFromBasket, increaseItemQuantityFromBasket } = basketSlice.actions;

export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
