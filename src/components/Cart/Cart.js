import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {

    return (
        <div className='cart-container'>
            <p id='order-summary'>Order Summary</p>
            <p className='selected-items'>Selected Items</p>
            <ul>
                {
                    cart?.map(i =>
                        <div className='cart-items' key={i.id}>
                            <img width='50px' height='50px' src={i.img} alt=''></img>
                            <p>{i.name}</p>
                        </div>
                    )
                }
            </ul>
        </div>
    );
};

export default Cart;