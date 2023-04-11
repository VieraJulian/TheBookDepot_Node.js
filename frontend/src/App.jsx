import { Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users/login" element={<Login />}></Route>
        <Route path="/users/register" element={<Register />}></Route>
        <Route path="/users/profile" element={<Profile />}></Route>
      </Routes>
    </>
  )
}

export default App