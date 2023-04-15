import { Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Detail from './pages/Detail'
import Cart from "./pages/Cart"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users/login" element={<Login />}></Route>
        <Route path="/users/register" element={<Register />}></Route>
        <Route path="/users/cart" element={<Cart />}></Route>
        <Route path="/users/profile" element={<Profile />}></Route>
        <Route path="/products/detail/:id" element={<Detail />}></Route>
      </Routes>
    </>
  )
}

export default App