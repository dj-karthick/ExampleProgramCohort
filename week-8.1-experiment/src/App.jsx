import { useState } from 'react'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  return <div className='grid grid-cols-4'>
    <RevenueCard title={"Amount Pending"} amount={"92,232"} orderCount={14}></RevenueCard>
  </div>
}
  

export default App
