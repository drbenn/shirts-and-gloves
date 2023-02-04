import './navbar.scss';
import { Link } from "react-router-dom"
import { NavUserRoutes } from '../nav-user-routes/nav-user-routes';
import { NavProductRoutes } from '../nav-product-routes/nav-product-routes';

export function Navbar() {
  return (
    <>
      <NavUserRoutes />
      <div className='brand-title'>
        SHIRTS & GLOVES
      </div>
      <NavProductRoutes />
    </>
  
  )
}