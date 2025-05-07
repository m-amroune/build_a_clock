import React from 'react'
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

// state time of session

const SessionControls = ({ sessionLength, setSessionLength, isRunning, setTimeRemaining }) => {
    const increment = () => {
    if (sessionLength < 60 && !isRunning) {
        setSessionLength(sessionLength + 1);
        setTimeRemaining((sessionLength + 1) * 60); // update remaining time
        }
        }
        const decrement = () => {
            if (sessionLength > 1 && !isRunning) {
            setSessionLength(sessionLength - 1);
            setTimeRemaining((sessionLength - 1) * 60); // update remaining time
            }
            }
  return (
    
    <div>
      <h2 id="break-label">Session Length</h2>
              <button id="break-decrement" onClick={decrement}>
              <FaArrowDown />
              </button>
              <span id="break-length"> {sessionLength} </span>
              <button id="break-increment" onClick={increment}>
              <FaArrowUp />
              </button>
    </div>
  )
}

export default SessionControls
