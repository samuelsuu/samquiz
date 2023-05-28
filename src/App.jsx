import { useState } from 'react'
import './App.css'
import Nav from './component/Navbar/Nav'
import Hero from './component/Hero/Hero'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Nav />
      <Hero />
    </div>
  )
}

export default App
