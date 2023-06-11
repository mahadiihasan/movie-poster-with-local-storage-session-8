import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact/Contact'
import SideCart from './components/SideCart/SideCart'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <Header></Header>
      </div>
      <div className='container'>
        <div className='main row'>
          <div className='home-container col-md-8'>
            <Home></Home>
          </div>
          <div className='sideCart col-md-4 card'>
            <SideCart></SideCart>
          </div>
        </div>
      </div>
      {/* <div><Contact></Contact></div> */}
    </>
  )
}

export default App
