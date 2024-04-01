import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action )=> {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.card.info.id);
      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].foodCount++;
    } else {
        state.items.push({...action.payload, foodCount: 1, id: action.payload.card.info.id});
    }
     
    },
    removeItem: (state, action)=>{
      state.items.pop();
    },
    clearCart: (state)=>{
      state.items.length = 0; 
  }
  }
})



export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;