import { NavLink } from 'react-router-dom';
import './nav-user-routes.scss';

export function NavUserRoutes() {

  return (
    <>
      <div className='user-routes-container'>
        <ul>
          <li><NavLink to="cart">Cart</NavLink></li>
          <li><NavLink to="register">Register</NavLink></li>
          <li><NavLink to="login">Login</NavLink></li>
        </ul>
      </div>
    </>
  )
}