import { useState } from 'react'
import './App.css'
import Characters from './components/Characters/Characters'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div>
      <Characters/>
    </div>
  )
}

export default App
