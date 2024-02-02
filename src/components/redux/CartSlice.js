import { createSlice } from '@reduxjs/toolkit'
// const {localStorage} = window;
// [JSON.parse(localStorage.getItem('cart'))]
const initialState = [];
export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      if ((state.length !== 0) && (state.find(p => p.id === action.payload.id))) {
        for (let i = 0; i < state.length; i++) {
          if (state[i].id === action.payload.id) {
            state[i].quantity = action.payload.quantity + state[i].quantity;
            console.log(state[i].quantity)
            return
          }
        }
      } else {
        state.push(action.payload)
        // localStorage.setItem('cart',JSON.stringify(state));
      }
    },
    removeFromCart: (state, action) => {
      console.log(action.payload)
      return state.filter((item) => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.id) {
          state[i].quantity = state[i].quantity + 1;
          console.log(state[i].quantity)
          return
        }
      }
    },
    decrementQuantity: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i].id === action.payload.id) {
          state[i].quantity = state[i].quantity - 1;
          console.log(state[i].quantity)
          return
        }
      }
    }
  },
})

export const { addToCard, removeFromCart, incrementQuantity, decrementQuantity } = CartSlice.actions

export default CartSlice.reducer