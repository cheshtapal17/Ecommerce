import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import { AuthLogin } from './pages/AuthLogin'
import { PrivateRoute } from './components/ProtectedRoute'
import Signup from './pages/SignUp'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        } />
        <Route path="/auth/login" element={<AuthLogin />} />
         <Route path="/auth/signup" element={<Signup />} />
      </Routes>
    </>
  )
}

export default App
