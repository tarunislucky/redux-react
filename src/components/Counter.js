import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store";
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  // Subscription is abstracted inside useSelector
  // 5. consume the redux store
  const { counter, showCounter } = useSelector(state => {
    return state.counter;
  })

  const incrementHandler = () => {
    // 6. dispatch actions
    dispatch(counterActions.increment());
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  }
  const increaseByHandler = () => {
    dispatch(counterActions.increase(5))
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={increaseByHandler}>Increase +5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
