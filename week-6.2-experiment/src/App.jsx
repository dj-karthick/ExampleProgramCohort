import { use, useEffect, useMemo, useState, memo, useCallback } from 'react'
import axios from 'axios';
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  // const [selectedId, setSelectedId] = useState(1);
  const [count, setCount] = useState(0);
  // const [inputValue, setInputValue] = useState(0);
  // const [sum, setSum] = useState(0);

  // useEffect(()=>{
  //   let sum = 0;
  //   for(let i = 0; i <= inputValue; i++){  //useEffect
  //     sum = sum + i;
  //   }
  //   setSum(sum);
  // }, [inputValue])

  // const finalSum = useMemo(() => {
  //   let sum = 0;
  //   for(let i = 0; i <= inputValue; i++){    //useMemo
  //     sum = sum + i;
  //   }
  //   return sum;
  // }, [inputValue]);
  
  const inputFunction = useCallback(() => {
    console.log("Hitting input function")}, [])

  return (
    <>
      <ButtonComponent inputFunction = {inputFunction} ></ButtonComponent>
      <button onClick={()=>{
        setCount(count + 1);
      }}>click Me {count}</button>
      {/* <input type="text" onChange={(e) => {
        const value = parseInt(e.target.value);
        setInputValue(value);
      }} placeholder='Enter a number' />
      <p>Sum is : {finalSum}</p>
      <button onClick={() => setCount(count + 1) }>Count : {count}</button> */}

      {/* <button onClick={()=> setSelectedId(1)}>1</button>
      <button onClick={()=> setSelectedId(2)}>2</button>
      <button onClick={()=> setSelectedId(3)}>3</button>
      <Todo id = {selectedId}></Todo> */}
    </>
  )
}

const ButtonComponent = memo(({inputFunction})=>{
  console.log("Child Rerendering");
  return <div>
    {/* {inputFunction} */}
    <button>Button Clicked</button>
  </div>
});

// function Todo({id}){
//   const [todo, setTodo] = useState({});

//   useEffect(() => {
//     axios.get('https://sum-server.100xdevs.com/todo?id=' + id)  //Assignment 2 of 6.1
//       .then((response) => {
//         const todo = response.data.todo;
//         // const todo = todos.find(todo => todo.id == id);
//         setTodo(todo);
//       })
//   }, [id])
//   return <div>
//     <h1>{todo.title}</h1>
//     <h2>{todo.description}</h2>
//   </div>
// }

export default App
