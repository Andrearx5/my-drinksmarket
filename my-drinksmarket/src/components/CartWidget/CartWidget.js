import React from 'react'
import shopping from '../../assets/shopping.PNG'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='menu_navbar__logo'>
        <img className='menu-navbar__img'src={shopping} alt="cart widget"/>

    </div>
  )
}

export default CartWidget