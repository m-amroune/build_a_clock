import React from 'react'

// display timer label, time remaining and three buttons for start, stop and reset

const Timer = ({ timerLabel, timeRemaining, handleStart, handleStop, handleReset }) => {
  return (
    <div>
      <h2>{timerLabel}</h2>
      <p id="time-remaining">{timeRemaining}</p>
<button id="start_stop" onClick={handleStart}>Start</button>
<button id="stop" onClick={handleStop}>Stop</button>
<button id="reset" onClick={handleReset}>Reset</button>
    </div>
  )
}

export default Timer
