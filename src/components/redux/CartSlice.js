import { createSlice } from '@reduxjs/toolkit'
const initialState = []
export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCard: (state, action) => {
      if ((state.length !== 0) && (state.find(p => p.id === action.payload.id))) {
        for (let i = 0; i < state.length; i++) {
          if (state[i].id === action.payload.id) {
            state[i].quantity=action.payload.quantity+state[i].quantity;
            console.log(state[i].quantity)
            return 
          }
        }
      } else {
        state.push(action.payload)
      }
    },
  removeFromCart: (state, action) => {
    console.log(action.payload)
    return state.filter((item) => item.id !== action.payload);
  }
},
})

export const { addToCard, removeFromCart } = CartSlice.actions

export default CartSlice.reducer