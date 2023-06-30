import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };
// 1 . Create a slice 
const counterSlice = createSlice({
	name: "counter",
	initialState: initialCounterState,
	reducers: {
		increment(state) {
			//unlike redux, internally the state is not mutated, a new state is returned 
			state.counter++;
		},
		decrement(state) {
			state.counter--;
		},
		increase(state, action) {
			state.counter = state.counter + action.payload;
		},
		toggleCounter(state) {
			state.showCounter = !state.showCounter;
		}
	}
});

//2 . Create a store by passing slices
const store = configureStore({
	reducer: counterSlice.reducer
});
// 3. Export actions & store
export const counterActions = counterSlice.actions;
export default store;



