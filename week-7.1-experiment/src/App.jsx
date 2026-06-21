import { useContext, useState } from "react";
import { CountContext } from "./context";

// The problem with passing propsPassing props is a great way to explicitly pipe data 
// through your UI tree to the components that use it.But passing props can become 
// verbose and inconvenient when you need to pass some prop deeply through the tree,
// or if many components need the same prop. The nearest common ancestor could be far
// removed from the components that need data, and lifting state up that high can
// lead to a situation called "prop drilling".

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     {/* wrap anyone that wants to use the teleported value inside a provider */}
      <CountContext.Provider value={{count, setCount}}>
        <Count ></Count>
      </CountContext.Provider>
    </>
  )
}

function Count(){
  return <div>
    <CountRenderer ></CountRenderer>
    <Buttons></Buttons>
  </div>
}

function CountRenderer(){
  const {count} = useContext(CountContext);
  return <div>
    {count}
  </div>
}

function Buttons(){
  const {count, setCount} = useContext(CountContext);
  return <div>
    <button onClick={()=>{
      setCount(count + 1)
    }}> Increase </button>
    <button onClick={()=>{
      setCount(count-1)
    }}> Decrease </button>
  </div>
}

export default App;