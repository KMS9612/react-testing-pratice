import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const onClickPlus = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMinus = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <div>
          <button
            data-testid="minusBtn"
            onClick={onClickMinus}
            disabled={isDisabled}
          >
            -
          </button>
          <button
            data-testid="plusBtn"
            onClick={onClickPlus}
            disabled={isDisabled}
          >
            +
          </button>
        </div>
        <button
          data-testid="onOffBtn"
          style={{ backgroundColor: "blue" }}
          onClick={() => {
            setIsDisabled((prev) => !prev);
          }}
        >
          on/off
        </button>
      </header>
    </div>
  );
}

export default App;
