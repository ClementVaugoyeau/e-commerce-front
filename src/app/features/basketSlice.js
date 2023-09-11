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
      const inCartItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );

      state.items = inCartItems;
      // localStorage.setItem("items", JSON.stringify(inCartItems));
    },
    increaseItemQuantity: (state, action) => {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      state.items[existingCartItemIndex].quantity += 1;
    },
    decreaseItemQuantity: (state, action) => {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.items[existingCartItemIndex].quantity < 2) {
        const inCartItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );

        state.items = inCartItems;
      } else {
        state.items[existingCartItemIndex].quantity -= 1;
      }
    },
  },
});

export const {
  addItemToBasket,
  removeItemFromBasket,
  increaseItemQuantity,
  decreaseItemQuantity,
} = basketSlice.actions;

export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;
