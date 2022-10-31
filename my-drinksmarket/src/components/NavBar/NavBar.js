import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/logo.png'
import './NavBar.css'


const NavBar = () => {
  return (
    <div className='menu-navbar-container'>
        <img className='navbar-logo'src={logo} alt="logotype"/>
        <h1 className='menu-tittle'>Monkey Drinks Market</h1>
        <ul className='menu-items'>
            <li>
                <a href='' className='menu-list'>Licores</a>
            </li>
            <li>
                <a href='' className='menu-list'>Cervezas</a>
            </li>
            <li>
                <a href='' className='menu-list'>Vinos</a>
            </li>
            <li>
                <a href='' className='menu-list'>Buscar</a>
            </li>
            <li>
                <a href='' className='menu-list'>Mis pedidos</a>
            </li>
        </ul>
        <CartWidget/>
    </div>
  );
}

export default NavBar