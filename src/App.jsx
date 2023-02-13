import './App.css'
import Header from './components/Header'
import { Routes, Route } from "react-router-dom"
import Checkout from './components/Checkout'
import Home from './components/Home'
import { AuthContextProvider } from './AuthContext'


function App({ products }) {

  return (
    <div className="App">
      <AuthContextProvider>
      <Header />
      <main className='main'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes> 
      </main>
      </AuthContextProvider> 
    </div>
  )
}

export default App
