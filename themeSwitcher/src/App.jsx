import { useEffect, useState } from 'react'

import './App.css'
import { Themeprovider } from './contexts/Theme'
import ThemeBtn from './componants/ThemeBtn'
import Card from './componants/Card'

function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }
  const darkTheme = () => {
    setThemeMode("dark")
  }

  // changing theme js method

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light")
    document.querySelector("html").classList.add(themeMode)
  }, [themeMode])

  return (
    <Themeprovider value={{ themeMode, lightTheme, darkTheme }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Theme btn */}
            <ThemeBtn/>
           
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* card */}
            <Card/>
          </div>
        </div>
      </div>

    </Themeprovider>
  )
}

export default App
