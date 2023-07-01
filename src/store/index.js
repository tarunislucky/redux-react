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
const initialAuthState = {
	isAuthenticated: false
}
const authSlice = createSlice({
	name: "authentication",
	initialState: initialAuthState,
	reducers: {
		login(state) {
			state.isAuthenticated = true;
		},
		logout(state) {
			state.isAuthenticated = false;
		}
	}
});
//2 . Create a store by passing slices
const store = configureStore({
	reducer: {
		counter: counterSlice.reducer,
		auth: authSlice.reducer
	}
});
// 3. Export actions & store
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;



