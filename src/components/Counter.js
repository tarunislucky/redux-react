import { useDispatch, useSelector } from "react-redux";
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  // Subscription is abstracted inside useSelector
  const counter = useSelector(state => {
    return state.counter;
  })
  const showCounter = useSelector(state => {
    return state.showCounter;
  })
  const incrementHandler = () => {
    dispatch({ type: "increment" });
  }
  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  }
  const increaseByHandler = () => {
    dispatch({ type: "increase", amount: 5 })
  }
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
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
