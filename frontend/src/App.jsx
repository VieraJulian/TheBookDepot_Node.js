import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Spinner from './components/Spinner'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Detail from './pages/Detail'
import Cart from "./pages/Cart"
import Admin from './pages/Admin'
import English from './pages/English'
import Books from './pages/Books';
import BestSeller from './pages/BestSeller'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {

    setIsLoading(false)

  }, 3000);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/users/login" element={<Login />}></Route>
          <Route path="/users/register" element={<Register />}></Route>
          <Route path="/users/cart" element={<Cart />}></Route>
          <Route path="/users/profile" element={<Profile />}></Route>
          <Route path="/products/detail/:id" element={<Detail />}></Route>
          <Route path="/products/english" element={<English />}></Route>
          <Route path="/products/bestSeller" element={<BestSeller />}></Route>
          <Route path="/products/books" element={<Books />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
      )}
    </>
  )
}

export default App