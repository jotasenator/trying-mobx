import { counterStore } from "../stores";
import { observer } from "mobx-react-lite";

const Counter = observer(() => {
  const handleIncrement = () => {
    counterStore.increment();
  };
  const handleReset = () => {
    counterStore.reset();
  };
  const handleDecrement = () => {
    counterStore.decrement();
  };

  return (
    <>
      <h1>Counter component using Mobx</h1>
      <p>{counterStore.count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  );
});

export default Counter;
