import { React } from 'react'
import './App.css'
import BreakControls from './components/BreakControls'
import { useState } from 'react'

function App() {
  const [breakLength, setBreakLength] = useState(5); // state time of break
  const [isRunning] = useState(false);  

  return (
    <div className="App">
      <h1>25 + 5 Clock</h1>
      <BreakControls breakLength={breakLength} setBreakLength={setBreakLength}
isRunning={isRunning}/>
    </div>
  )
}

export default App
