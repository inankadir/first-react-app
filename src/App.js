import { useState } from "react";
import MyButton from "./Components/MyButton";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1 className="counter">{counter}</h1>
      <MyButton color="lightblue" onClick={handleIncrement}>
        Increment +
      </MyButton>
      <MyButton color="pink" onClick={handleDecrement}>
        Decremet -
      </MyButton>
    </div>
  );
}
export default App;
