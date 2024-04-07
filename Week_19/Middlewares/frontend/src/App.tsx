
import { useState } from 'react'
import './App.css'

function App() {
  const [socket, Socket] = useState(null)

  if(!socket){
    return <div>
      loading.....
    </div>
  }
  return (
    <>
      hi there
    </>
  )
}

export default App
