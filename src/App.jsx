import { BrowserRouter, Route, Routes, useNavigate } from 'react-router'
import './App.css';
import { Home } from './pages/Home';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import './App.css'
import { Register } from './pages/auth/Register';
import { Login } from './pages/auth/Login';
import { ProductInfo } from './pages/ProductInfo';
import { Card } from './pages/Card';
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Product } from './pages/Product';
import { About } from './pages/About';
import { ContactForm } from './components/ContactForm';

function App() {
  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  const pathname = location.pathname

  useEffect(() => {
    if (!token) {
      pathname === '/register' || "/login" && navigate(pathname)
    }
  }, [])


  return (

    <>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/productinfo/:id' element={<ProductInfo />} />
        <Route path='/card' element={<Card />} />
        <Route path='/product'element={<Product/>} />
        <Route path='/About' element={<About/>}/>
        <Route path='/contact' element={<ContactForm/>} />
        {/* <Route path='*' element={<NotFound />} /> */}
        {/* <Route path="/product/:id" element={<Product />} /> */}
      </Routes>
      <ToastContainer />    </>
  )
}

export default App
