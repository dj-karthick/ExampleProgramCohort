// useState is a hook.
import { useState } from "react";

function App() {
  
  // const [count, setCount] = useState(0); //Whenever setCount is called it dispatch something to get rerender.
  const [todos, setTodos] = useState([{
  title: "Go to gym",
  description: "Go to gym from 7-9",
  completed: false
  }, {
  title: "Study DSA",
  description: "Study DSA form 9-100",
  completed: true
  }]);

  function addTodo(){
    //[...todos] => [1,2] - This syntax spreads the value in the todos variable.
    setTodos([...todos, {
      title : "New Todo",
      description : "Desc of new todo"
    }])
  }

  return (<div>
    {/* <CustomButton count = {count} setCount = {setCount}></CustomButton> */}
    {/* {JSON.stringify(todos)} */}
    <button onClick={addTodo}>Add a random Todo</button>
    {todos.map(function(todo){
      return <Todo title = {todo.title} description = {todo.description}></Todo>
    })}
    
  </div>)
}

function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

// function CustomButton(props){
//   function onClickHandler(){
//     props.setCount(props.count + 1);
//   }
//   return <button onClick={onClickHandler}>
//     counter{props.count}
//   </button>
// }

export default App
