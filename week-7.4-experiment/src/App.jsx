import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { use, useEffect, useMemo } from "react";
import { todoAtomFamily } from "./store/atoms/count"

export default function App(){

  return <RecoilRoot>
      <UpdateComponent></UpdateComponent>
      <Todo id = {1} ></Todo>
      <Todo id = {2} ></Todo>
      <Todo id = {2} ></Todo>
  </RecoilRoot>
}


function Todo({id}){
  const currentTodo = useRecoilValue(todoAtomFamily(id));

  return <div>
    {currentTodo.id}
    {currentTodo.title}
    {currentTodo.description}
  </div>
}


// A component rerenders when any subscribed Recoil value it reads changes.
// It does not matter whether that change came from an atom or a selector, as long as the component is subscribed to it

//The component subscribes to both the atom and the selector. When the atom updates, 
//the selector recomputes because it depends on that atom, and React re-renders the 
//component with the latest atom value and the latest derived selector value, usually in the same render cycle.