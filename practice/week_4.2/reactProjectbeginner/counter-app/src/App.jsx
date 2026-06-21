import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//state
function App() {

  const [todo, setTodo] = useState([{
    title : "Go to the gym",
    description : "Go to gym from 7-9",
    completed : false
  },{
    title : "Study DSA",
    description : "Study DSA for 100 days",
    completed : true
  }])


  function addTodo(){
    setTodo([...todo, {
      title : "New Todo",
      description : "New todo created",
      completed : false
    }])
  }


  return(
    <div>
      <button onDoubleClick={addTodo}>Add a random Todo</button>
      {todo.map(function(todos){
        return <TodoItem title={todos.title} description={todos.description}/>
        })}
    </div>)
  
}

//component

function TodoItem(props){ 

  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
