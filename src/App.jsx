import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cart from './Components/Card' 
import Mebel from './Components/Mebel'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Mebel/>
    </>
  )
}

export default App
