import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let[counter,setCounter] = useState(16)
  // let counter = 5
  const addValue =() =>{
    counter = counter + 1
    setCounter(counter)
  }
  const removeValue =() =>{
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>React</h1>
      <h2>Conter Value:{counter}</h2>
      <button onClick={addValue}>Add value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove value{counter}</button>
    </>
  )
}

export default App
