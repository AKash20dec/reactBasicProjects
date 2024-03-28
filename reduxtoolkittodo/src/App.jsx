import { useState } from 'react'

import './App.css'
import AddTodo from './componants/AddTodo'
import Todos from './componants/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='text-3xl text-black p-3'>Learn about redux toolkit</h1>
    <AddTodo/>
    <Todos/>
    </>
  )
}

export default App
