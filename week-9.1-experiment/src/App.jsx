import { use, useEffect, useState } from 'react'
import React from 'react'
import './App.css'

function useDebounce(value, timeOut){
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(()=>{
    const timeOutNumber = setTimeout(() => {
      setDebouncedValue(value)
    }, timeOut);
    return ()=>{
      clearTimeout(timeOutNumber)
    }
  }, [value])

  return debouncedValue;
}

function App() {

  const [value, setValue] = useState('');
  const debouncedValue = useDebounce(value, 5000);  
  console.log(debouncedValue);

  // useEffect(()=>{
  //   axios.get() 
  // }, [debouncedValue])

  return <>
    Debounced value is {debouncedValue}
    <input type="text" value={value} onChange={e => setValue(e.target.value)} />
  </>


}



export default App
