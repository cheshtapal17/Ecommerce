import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLogin } from '../../context/login-context';
import { useCart } from '../../context/cart-context';

function Navbar() {
  const [isAccountDropDownOpen, setIsAccountDropDownOpen] = useState(false)
  const navigate = useNavigate();
  const { token, loginDispatch } = useLogin();
  const {cart}=useCart();

  const onLoginClick = () => {
    if (token?.access_token) {
            loginDispatch({
        type: "LOGOUT"
      })
      navigate('/auth/login')
    } else {
      navigate('/auth/login')
    }
  }

  return (
    <header className='flex bg-green-900 text-slate-50 justify-between' style={{padding:"0 17px"}}>

      <div>
        <h1 className='text-5xl  hover:cursor-pointer' onClick={() => navigate("/")}>Shop It</h1>
      </div>
      <nav className='ml-auto d-flex gap-2 items-center' style={{}}>
        <span onClick={() => navigate("/wishlist")} className="material-symbols-outlined text-3xl hover:cursor-pointer">
          favorite
        </span>
        <span onClick={() => navigate("/cart")} className="material-symbols-outlined text-3xl hover:cursor-pointer">
          shopping_cart
        </span>
        <span>{cart.length}</span>
        <div className='relative'>
          <span onClick={() => setIsAccountDropDownOpen(!isAccountDropDownOpen)} className="material-symbols-outlined text-3xl hover:cursor-pointer">
            account_circle
          </span>

          {isAccountDropDownOpen && <div className='absolute bg-amber-50 rounded-sm' style={{right:"4px"}}>
            <button onClick={onLoginClick} className='hover:cursor-pointer text-black ' style={{padding:"3px 17px"}}>
              {token.access_token ? "Logout" : "Login"}
            </button>
          </div>}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
