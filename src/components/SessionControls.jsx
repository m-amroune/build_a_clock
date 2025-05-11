import React from 'react';
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

// Component for controlling the session duration 
const SessionControls = ({ sessionLength, setSessionLength, isRunning, setTimeLeft }) => {

  // Increments session length up to 60 only if timer is not running
  const increment = () => {
    if (sessionLength < 60 && !isRunning) {
      setSessionLength(sessionLength + 1);
      setTimeLeft((sessionLength + 1) * 60); // update remaining time 
    }
  };

  // Decrements session length down to 1 only if timer is not running
  const decrement = () => {
    if (sessionLength > 1 && !isRunning) {
      setSessionLength(sessionLength - 1);
      setTimeLeft((sessionLength - 1) * 60); // update remaining time 
    }
  };

  return (
    <div>
      <h2 id="session-label">Session Length</h2>
      <button id="session-decrement" onClick={decrement}>
        <FaArrowDown />
      </button>
      <span id="session-length">{sessionLength}</span>
      <button id="session-increment" onClick={increment}>
        <FaArrowUp />
      </button>
    </div>
  );
};

export default SessionControls;