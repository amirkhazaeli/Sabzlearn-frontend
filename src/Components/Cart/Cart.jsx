import React, { useContext } from 'react'
import CartItemComponent from '../CartItemComponent/CartItemComponent'
import './Cart.css'
import CartContext from '../../Context/CartContext'
export default function Cart({ isActiveCart }) {
    const { CartItems, setCartItems } = useContext(CartContext)

    return (
        <div className={`navbar-cart ${isActiveCart ? 'active' : ''}`}>
            <div className='navbar-cart-header'>
                <h1 className='navbar-cart-title'>{CartItems.length} محصول در سبد </h1>
                <button>تکمیل خرید</button>
            </div>

            <div className='cart-items'>
                {CartItems.length ? (
                    CartItems.map((cartItemData) => (
                        <CartItemComponent cartItemData={cartItemData} setCartItems={setCartItems} CartItems={CartItems} />
                    )
                    )
                ) : (
                    <div className='cart-empty'>
                        محصولی در سبد ندارید
                    </div>
                )

                }
            </div>
        </div>
    )
}
