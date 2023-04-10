import { Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="users/login" element={<Login />}></Route>
        <Route path="users/register" element={<Register />}></Route>
      </Routes>
    </>
  )
}

export default App