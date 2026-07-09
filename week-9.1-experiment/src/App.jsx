import { useEffect, useState } from 'react'
import React from 'react'
import './App.css'

function useTodos(n){
  const [todos, setTodos] = useState();
  const [loading, setLoading] = useState(true);

  function getData(){
    axios.get("http://sum-server.100xdevs.com/todos")
      .then( res => {
        setTodos(res.data.todos)
        setLoading(false)
      })
  }

  useEffect(()=>{
    const value = setInterval(() => {
      getData();
    }, n * 1000);

    getData();

    return ()=>{
      clearInterval(value);
    }
  }, [n])

  return {todos, loading}
}

function App() {
  const {todos, loading} = useTodos();

  return (
    <>
    {loading ? "Loading" : todos.map(todo => <Track todo={todo} />) }
    </> 
  )
}

function Track({todo}){
  return <div>

  </div>
}



export default App
