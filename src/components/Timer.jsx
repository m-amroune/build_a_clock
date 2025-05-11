import React from 'react';

// Timer display and controls component
const Timer = ({ timerLabel, timeLeft, handleStartStop, handleReset, isRunning }) => {
  return (
    <div>
      {/* Display whether it's a "session" or a "break" */}
      <h2 id="timer-label">{timerLabel}</h2>

      <p id="time-left">{timeLeft}</p>

      <button 
        id="start_stop" 
        onClick={handleStartStop}
        aria-label={isRunning ? 'Pause the timer' : 'Start the timer'}
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>

      <button 
        id="reset" 
        onClick={handleReset}
        aria-label="Reset the timer"
      >
        Reset
      </button>
    </div>
  );
};

export default Timer;
