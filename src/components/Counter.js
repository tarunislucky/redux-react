import { useSelector } from "react-redux";
import classes from './Counter.module.css';

const Counter = () => {
  // Subscription is abstracted inside useSelector
  const counter = useSelector(state => {
    return state.counter;
  })
  const toggleCounterHandler = () => {

  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
