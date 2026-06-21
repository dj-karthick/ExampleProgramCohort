import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Header } from './components/Header'
// import { HeaderWithButton } from './components/HeaderWithButton'
// let id = 4;

function App() {
  // const [title, setTitle] = useState("My Name is Karthick");

  // const title = header.title;

  // const [todos, setTodos] = useState([{
  //   id : 1,
  //   title : "Gym",
  //   description : "Go to gym"
  // },{
  //   id : 2,
  //   title : "Work",
  //   description : "Go to Work"
  // },{
  //   id : 3,
  //   title : "Clg",
  //   description : "Go to clg"
  // }])

  // function addTodo(){

  //   // setTodos([...todos, {         //...todos is spread operator.
  //   //   id : 4,
  //   //   title : "Go to dinner",
  //   //   description : "Eat dinner"
  //   // }])

  //   const newTodo = [];
  //   for(let i = 0; i < todos.length; i++){
  //     newTodo.push(todos[i]);
  //   }
  //   newTodo.push({
  //     id : id++,
  //     title : Math.random(),
  //     description : Math.random()
  //   })
  //   setTodos(newTodo);
  // }

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    setInterval(fetch("https://sum-server.100xdevs.com/todos")
      .then(response => response.json())
      .then(data => setTodos(data.todos)), 3000)
  }, []);

  return (
    <>
      {/* <HeaderWithButton></HeaderWithButton> */}
      {/* <button onClick={addTodo}>Add a Todo</button>
      {todos.map(todo => <Header title = {todo.title} description={todo.description}></Header>)} */}
      {/* <CardWrapper innerComponent={<TextComponent />}></CardWrapper> */}
      {/* <CardWrapper>
        <div>
          hit there
        </div>
        <div>
          hi
        </div>
      </CardWrapper> */}
      {/* <CardWrapper>
        <div>
          hit there
        </div>
      </CardWrapper> */}
      {todos.map(todo => <Header key = {todo.id} title = {todo.title} description={todo.description}></Header>)}
    </>
  )
}

// function CardWrapper({innerComponent}){
// function CardWrapper({children}){
//   return <div style={{border : "2px solid black"}}>
//     {/* {innerComponent} */}
//     {children}
//   </div>
// }

// function TextComponent(){
//   return <div>
//     Hit there
//   </div>
// }

export default App
