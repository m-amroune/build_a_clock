import React from 'react';
import { FaArrowDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

// control duration of break with 2 functions
const BreakControls = ({breakLength, setBreakLength, isRunning }) => {
    const increment = () => {
        if(breakLength < 60 && !isRunning){
            setBreakLength(breakLength + 1);
        }
    }
    const decrement = () => {
        if (breakLength > 1 && !isRunning) {
        setBreakLength(breakLength - 1);
        }
        }
  return (
    <div>
        <h2 id="break-label">Break Length</h2>
        <button id="break-decrement" onClick={decrement} >
        <FaArrowDown />
        </button>
        <span id="break-length">{breakLength}</span>
        <button id="break-increment" onClick={increment}   >
        <FaArrowUp />
        </button>
      
    </div>
  )
}

export default BreakControls;
