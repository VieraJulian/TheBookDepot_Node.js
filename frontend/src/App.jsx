import { Routes, Route } from 'react-router-dom'

import Navbar from "./pages/Navbar"
import Home from "./pages/Home"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App
