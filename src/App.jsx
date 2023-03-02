import './App.css'
import Header from './components/Header'
import { Routes, Route } from "react-router-dom"
import Checkout from './components/Checkout'
import Home from './components/Home'
import { AuthContextProvider } from './AuthContext'
import Login from './components/Login'
import Register from './components/Register'


function App({ products }) {

  return (
    <div className="App">
      <AuthContextProvider>
      
      <main className='main'>
        <Routes>
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      </AuthContextProvider> 
    </div>
  )
}

export default App
