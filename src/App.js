import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);
  const [step, setStep] = useState(1);
  const date = new Date();

  date.setDate(date.getDate() + count);
  return (
    <>
      <div className="text-center">
        <div className="d-flex justify-content-center align-item-center h-100">
          <button onClick={() => setStep((c) => c - 1)}>-</button>
          step: {step}
          <button onClick={() => setStep((c) => c + 1)}>+</button>
        </div>
        <div className="d-flex justify-content-center align-item-center h-100">
          <button onClick={() => setCount((c) => c - step)}>-</button>
          Count: {count}
          <button onClick={() => setCount((c) => c + step)}>+</button>
        </div>

        <p>
          {count < 0
            ? `${Math.abs(count)} days ago date was `
            : `${count} days from now date is `}
          {date.toDateString()}
        </p>
      </div>
    </>
  );
}

export default App;
