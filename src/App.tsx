import './App.css'
import { Routes, Route } from "react-router-dom"
import { Navbar } from './components/navbar/navbar'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Men } from './pages/Men'
import { Register } from './pages/Register'
import { Sale } from './pages/Sale'
import { Women } from './pages/Women'
import { Cart } from './pages/cart'

// https://www.youtube.com/watch?v=lATafp15HWA
function App() {

  // the <> and </> are called a fragment "to render everything to the screen"
  return (
    <> 
      <Navbar></Navbar>
      <div className='routes-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />  
          <Route path="/sale" element={<Sale />} />     
          <Route path="/register" element={<Register />} />     
          <Route path="/login" element={<Login />} />   
          <Route path="/cart" element={<Cart />} />   
        </Routes>
      </div>

    </>
  )
}

export default App
