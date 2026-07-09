import { use, useEffect, useState } from 'react'
import React from 'react'
import './App.css'

function useMousePointer(){
  const [position, setPosition] = useState({x: 0, y: 0});

  const handleMouse = e => setPosition({x: e.clientX, y: e.clientY})

  useEffect(()=>{
    window.addEventListener('mousemove', handleMouse)
    return ()=>{
      window.removeEventListener('mousemove', handleMouse)
    }
  }, [])

  return position 
}

function App() {
  
  const mousePointer = useMousePointer();

  return <>
    Your mouse position is {mousePointer.x} {mousePointer.y}
  </>


}



export default App
