
import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='fixed top-12 flex-wrap justify-center px-4 rounded-lg bg-white py-4 shadow-lg'>BackGround Changer</div>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button className='px-3 py-2 bg-blue-500 text-white rounded-3xl' onClick={() => setColor('dodgerblue')}>Blue</button>
          <button className='px-3 py-2 bg-red-500 text-white rounded-3xl' onClick={() => setColor('red')}>Red</button>
          <button className='px-3 py-2 bg-yellow-500 text-white rounded-3xl' onClick={() => setColor('yellow')}>Yellow</button>
          <button className='px-3 py-2 bg-gray-500 text-white rounded-3xl' onClick={() => setColor('gray')}>Gray</button>
          <button className='px-3 py-2 bg-green-500 text-white rounded-3xl' onClick={() => setColor('green')}>Green</button>
        </div>
      </div>
    </div>
  )
}

export default App
