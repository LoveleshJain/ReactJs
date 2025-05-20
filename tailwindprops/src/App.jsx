import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username:"lovelesh",
    age: 19
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl' >Tailwind</h1>
      <Card channel="hello" someObj={myObj}/>
    </>
  )
}

export default App
