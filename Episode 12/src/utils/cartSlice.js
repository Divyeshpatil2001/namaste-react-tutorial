import { createSlice,current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // older way vanila js redux => dont mutate the state , returning is mandatory
      // const newState = {...state};
      // newState.items = push(action.payload);
      // return newState;

      // behind the scenes redux toolkit uses immer library for doing above steps autoomatically
      // immer library finds the differences between original state and mutating state and gives back a new state

      // mutating the state
      state.items.push(action.payload);
    },
    removeCart: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // if imagine state = "pizza"
      console.log(state); // immer proxy {items: Array(0)} - its not show state unless use current 
      console.log(current(state));
      state = []; // this will not work - because its not affect to original state
      console.log(state)
      // below is works

      state.items.length = 0;
      // redux toolkit says mutating the existing state or returning a new state
      // return { items : [] }; // this will work - because its returning a new state and original state will be replaced by this new state 
    },
  },
});

export const { addItem, removeCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
