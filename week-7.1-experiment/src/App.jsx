import { Suspense, lazy} from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
const Dashboard = lazy(()=> import('./components/Dashboard'))
const LandingPage = lazy(()=> import('./components/LandingPage'))

function App() {

  return (
    <>
      <BrowserRouter>
        <AppBar></AppBar>
        <Routes>
          <Route path='/dashboard' element ={<Suspense fallback={'....loading Dashboard'}>
            <Dashboard />
          </Suspense>}></Route>
          <Route path='/' element={<Suspense fallback={'...loading Landing page'}>
            <LandingPage />
          </Suspense>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function AppBar(){
  const navigate = useNavigate();
  return <div>
    <button onClick={()=>{
      navigate('/');
    }}>Landing</button>
    <button onClick={()=>{
      navigate('/dashboard')
    }}>Dashboard</button>
  </div>
}

export default App
