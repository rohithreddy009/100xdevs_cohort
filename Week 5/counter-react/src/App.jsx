import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// let [state, setCount] = {
//   count: 0 
// }

function App() {
  const [count,setCount] = useState(0)

  function onClickHandler(){
    setCount(count+10)
    console.log(count)
  }

  return (
   <div>
    <button onClick={onClickHandler}>Number of clicks {count}</button>
   </div>
  )
}

export default App
