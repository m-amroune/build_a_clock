import React from 'react';
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

// Component for controlling the break duration (Composant pour contrôler la durée de la pause)
const BreakControls = ({ breakLength, setBreakLength, isRunning }) => {

  // Increments break length up to 60 only if timer is not running
  const increment = () => {
    if (breakLength < 60 && !isRunning) {
      setBreakLength(breakLength + 1);
    }
  };

  // Decrements break length down to 1 only if timer is not running
  const decrement = () => {
    if (breakLength > 1 && !isRunning) {
      setBreakLength(breakLength - 1);
    }
  };

  return (
    <div>
      <h2 id="break-label">Break Length</h2>
      <button id="break-decrement" onClick={decrement}>
        <FaArrowDown />
      </button>
      <span id="break-length">{breakLength}</span>
      <button id="break-increment" onClick={increment}>
        <FaArrowUp />
      </button>
    </div>
  );
};

export default BreakControls;
