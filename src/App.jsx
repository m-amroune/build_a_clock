import { React } from 'react'
import './App.css'
import BreakControls from './components/BreakControls'
import SessionControls from './components/SessionControls'
import Timer from './components/Timer'
import { useState } from 'react'

function App() {
  const [breakLength, setBreakLength] = useState(5); // state duration of break
  const [isRunning] = useState(false);
  const [sessionLength, setSessionLength]  = useState(25) // initial session duration
  const [timeRemaining, setTimeRemaining] = useState(sessionLength * 60)
  const [timerLabel, setTimerLabel] = useState('Session'); // state timer (session or break)
;
  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <BreakControls breakLength={breakLength} setBreakLength={setBreakLength}
isRunning={isRunning}/>
      <SessionControls sessionLength={sessionLength} setSessionLength={setSessionLength}  setTimeRemaining={setTimeRemaining} />
      <Timer timerLabel={timerLabel} timeRemaining={timeRemaining} />
    </div>
    
  )
}

export default App
