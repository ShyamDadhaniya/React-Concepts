// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";

// Reducer
const initialCounterState = {
  counter: 0,
  showCounter: true,
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
//-----------------------------------------------------
const initialAuthState = { isAuth: false };
const authSlice = createSlice({
  name: "Auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});
const  inc = (data) => {
  
  return async (dispatch)=>{
   //await detchdf`
      dispatch({type:"dwar",data:data})
  }
  // return { type: "this", payload: data };
};
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increaseby5") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if ((action.type = "toggle")) {
//     return {
//       counter: state.counter,
//       showCounter: !state.showCounter,
//     };
//   }
//   return state;
// };

//Store
// const store = createStore(counterReducer)
const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;
export default store;
