import { use, useEffect, useState } from 'react'
import React from 'react'
import './App.css'

function useInterval(fn, timeInput){
  
  useEffect(()=>{
    setInterval(() => {
      fn()
    }, timeInput);
  }, [])

}

function App() {
  
  const [count, setCount] = useState(0);

  useInterval(()=>{
    setCount(c => c + 1)
  }, 1000)
  

  return <>
    Timer is at {count}
  </>


}



export default App
