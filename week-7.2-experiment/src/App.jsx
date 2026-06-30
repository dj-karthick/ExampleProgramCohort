import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom, evenSelector } from './store/atoms/count'

// What is state management
// A cleaner way to store the state of your app
// Until now, the cleanest thing you can do is use the Context APD ID
// It lets you teleport state
// But there are better solutions that get rid of the problems that Context Api has
// (unnecessary re-renders)

function App() {

  return (
    <>
      <RecoilRoot>
        <Count></Count>
      </RecoilRoot>
    </>
  )
}

function Count(){
  return <div>
    <CountReRender></CountReRender>
    <Buttons></Buttons>
    <EvenCountRender></EvenCountRender>
  </div>
}

function CountReRender(){
  const count = useRecoilValue(countAtom);

  return <div>
    {count}
  </div>
}

function EvenCountRender(){                 // Using the selector
  const isEven = useRecoilValue(evenSelector);

  return <div>
    {isEven ? 'It is even' : null}
  </div>
}

function Buttons(){
  // const [count, setCount] = useRecoilState(countAtom);

  const setCount = useSetRecoilState(countAtom);

  return <div>
    <button onClick={()=>{
      setCount(count => count+1);
    }}>Increase</button>

    <button onClick={()=>{
      setCount(count => count-1);
    }}>Decrease</button>
  </div>
}

export default App;
