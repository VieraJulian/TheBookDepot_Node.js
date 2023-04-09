import { Routes, Route } from 'react-router-dom'

import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import Footer from "./pages/Footer"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer /> 
    </>
  )
}

export default App