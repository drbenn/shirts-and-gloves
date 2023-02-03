import './navbar.scss';
import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <>
      <div className='user-routes'>
        <ul>
          <Link to="/login"><li>Login</li></Link>
          <Link to="/register"><li>Register</li></Link>
          <Link to="/cart"><li>Cart</li></Link>
        </ul>
      </div>
      <div className='brand-title'>
        SHIRTS & GLOVES
      </div>
      <div className='nav-routes'>
        <ul>
          <Link to="/men"><li>MEN</li></Link>
          <Link to="/women"><li>WOMEN</li></Link>
          <Link to="/sale"><li>SALE</li></Link>
        </ul>
      </div>
    </>
  
  )
}