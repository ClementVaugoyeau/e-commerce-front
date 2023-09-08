import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};
let nextId = 1
export const basketSlice = createSlice({
  name: 'basket',
  initialState,

  reducers: {
    addItemToBasket: (state, action) => {
      console.log('in')
      state.items = [...state.items, {id: nextId, name: action.payload.name, price: action.payload.price, category: action.payload.category, img: action.payload.img}]
      nextId += 1
    },
    removeItemFromBasket: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id)
    },
  },
});

export const { addItemToBasket, removeItemFromBasket } = basketSlice.actions;

export const selectItems = (state) => state.basket.items;

export default basketSlice.reducer;

