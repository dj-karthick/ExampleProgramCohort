import { useState } from 'react'
import React from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyComponent/>
    </> 
  )
}

class MyComponent extends React.component{
  
  componentDidMount(){
    console.log("Onmount");
  }

  componentWillUnmount(){
    console.log("Unmount");
  }
  
  render() {
    return <div>
      <p> (this.state.count) </p>
      <button onClick={this.incrementCount}>Increment</button>
    </div>
  }
}

export default App
