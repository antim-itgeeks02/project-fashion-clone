import { createSlice } from '@reduxjs/toolkit'
const initialState = []
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard(state,action){
      state.push(action.payload);
    },
    remove: (state,action) => {
      state = state.filter(item => item.id === action.payload);
      console.log(state);
    }
  },
})

export const { addToCard, remove } = cartSlice.actions

export default cartSlice.reducer