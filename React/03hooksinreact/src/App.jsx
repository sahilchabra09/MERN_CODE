import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(15);

  const addValue = () => {
    setCount(count + 1)
  }

  const subtractValue = () => {
    setCount(count - 1)
  }

  return (
    <>
      <h1>Hooks in react(Upstate)</h1>
      <h3>Counter:-{count}</h3>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={subtractValue}>Subtract value</button>
    </>
  )
}

export default App
