import { NavLink } from 'react-router-dom';
import './nav-product-routes.scss';

export function NavProductRoutes() {
  return (
    <>
      <div className='product-routes-container'>
        <ul>
          <li><NavLink to="men">MEN</NavLink></li>
          <li><NavLink to="women">WOMEN</NavLink></li>
          <li><NavLink to="sale">SALE</NavLink></li>
        </ul>
      </div>
    </>
  )
}