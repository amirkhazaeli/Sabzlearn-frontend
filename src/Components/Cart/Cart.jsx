import React from 'react'
import CartItem from '../CartItem/CartItem'
import './Cart.css'
export default function Cart({isActiveCart}) {
    return (
        <div className={`navbar-cart ${isActiveCart ? 'active' : ''}`}>
            <div className='navbar-cart-header'>
                <h1 className='navbar-cart-title'>4 محصول در سبد </h1>
                <button>تکمیل خرید</button>
            </div>

            <div className='cart-items'>
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        </div>
    )
}
