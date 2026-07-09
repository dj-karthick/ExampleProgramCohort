import { use, useEffect, useState } from 'react'
import React from 'react'
import './App.css'

function useIsOnline(){
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

  useEffect(()=>{
    window.addEventListener('online', ()=>{
      setIsOnline(true)
    })

    window.addEventListener('offline', ()=>{
      setIsOnline(false)
    })
  }, [])

  return isOnline
}

function App() {
  
  const isOnline = useIsOnline();

  if(isOnline) return "Yay, You are online"

  return "You are offline, connect to the internet"
}



export default App
