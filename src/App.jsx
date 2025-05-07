import { React } from 'react'
import './App.css'
import BreakControls from './components/BreakControls'
import SessionControls from './components/SessionControls'
import { useState } from 'react'

function App() {
  const [breakLength, setBreakLength] = useState(5); // state duration of break
  const [isRunning] = useState(false);
  const [sessionLength, setSessionLength]  = useState(25)
  const [setTimeRemaining] = useState()
;
  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <BreakControls breakLength={breakLength} setBreakLength={setBreakLength}
isRunning={isRunning}/>
      <SessionControls sessionLength={sessionLength} setSessionLength={setSessionLength}  setTimeRemaining={setTimeRemaining} />
    </div>
  )
}

export default App
