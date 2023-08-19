import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const [disableBtn, setDisableBtn] = useState("btn");

  const handleColor = () => {
    setDisableBtn("btn disable");
  };

  const handleIncrement = () => {
    if (count !== 5) {
      setCount((prevValue) => prevValue + 1);
    }
  };

  const handleDecrement = () => {
    if (count !== -5) {
      setCount((prevValue) => prevValue - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="center">
      <div className="title">
        <h1>Counter App</h1>
      </div>

      <div className="card">
        <h2>Count: {count}</h2>
        <div className="btn-div">
          <button
            className={`btn ${count === 5 ? "disable" : ""}`}
            onClick={handleIncrement}
            disabled={count === 5}
          >
            +
          </button>
          <button
            className={`btn ${count === -5 ? "disable" : ""}`}
            onClick={handleDecrement}
            disabled={count === -5}
          >
            -
          </button>
          <button className="btn" onClick={handleReset}>
            0
          </button>
        </div>
      </div>
    </div>
  );
}
