/* eslint-disable react-hooks/exhaustive-deps */
import { React, useState, useEffect, useRef } from 'react';
import './App.css';
import BreakControls from './components/BreakControls';
import SessionControls from './components/SessionControls';
import Timer from './components/Timer';

function App() {
  // Default break and session lengths
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [timeLeft, setTimeLeft] = useState(25 * 60); 
  const [timerLabel, setTimerLabel] = useState('Session');
  const [isRunning, setIsRunning] = useState(false);

  // Refs to store interval and audio 
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  // Refs to keep latest values for timer logic inside setInterval 
  const breakRef = useRef(breakLength);
  const sessionRef = useRef(sessionLength);
  const labelRef = useRef(timerLabel);

  // synchronize ref values with state for each updates 
  useEffect(() => {
    breakRef.current = breakLength;
  }, [breakLength]);

  useEffect(() => {
    sessionRef.current = sessionLength;
  }, [sessionLength]);

  useEffect(() => {
    labelRef.current = timerLabel;
  }, [timerLabel]);

  
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Toggle start/pause of timer 
  const handleStartStop = () => {
    setIsRunning(prev => !prev);
  };

  // Main timer effect: runs interval if isRunning is true
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft(prev => {
          if (prev === 0) {
            // Play beep sound when time hits zero 
            audioRef.current.play();
            // Switch between session and break 
            if (labelRef.current === 'Session') {
              setTimerLabel('Break');
              return breakRef.current * 60;
            } else {
              setTimerLabel('Session');
              return sessionRef.current * 60;
            }
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    // Clean up the interval on unmount or when isRunning changes
    return () => clearInterval(intervalRef.current);

  }, [isRunning]);

  // Reset timer and states to default values 
  const handleReset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setBreakLength(5);
    setSessionLength(25);
    setTimerLabel('Session');
    setTimeLeft(25 * 60);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Update displayed time if session length changes and timer is stopped
  
  useEffect(() => {
    if (!isRunning && timerLabel === 'Session') {
      setTimeLeft(sessionLength * 60);
    }
  }, [sessionLength]);

  // Update displayed time if break length changes and timer is stopped
  useEffect(() => {
    if (!isRunning && timerLabel === 'Break') {
      setTimeLeft(breakLength * 60);
    }
  }, [breakLength]);

  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>

      <BreakControls
        breakLength={breakLength}
        setBreakLength={setBreakLength}
        isRunning={isRunning}
      />

      <SessionControls
        sessionLength={sessionLength}
        setSessionLength={setSessionLength}
        setTimeLeft={setTimeLeft}
        isRunning={isRunning}
      />

      <Timer
        timerLabel={timerLabel}
        timeLeft={formatTime(timeLeft)}
        handleStartStop={handleStartStop}
        handleReset={handleReset}
        isRunning={isRunning}
      />

      {/* Audio element for beep sound when timer hits 00:00  */}
      <audio
        id="beep"
        ref={audioRef}
        src="/clock-ticking-sound.mp3"
        onCanPlayThrough={() => {
          // console.log('Audio ready to play!');
        }}
      ></audio>
    </div>
  );
}

export default App;