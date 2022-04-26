import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i]
        total=total+product.price;
    }

    let shipping = 0;
    if(total>0){
        shipping=12.99
    }
    else if(total>35)
    {
        shipping=0;
    }
    else if(total>15)
    {
        shipping=4.99;
    }

    return (
        <div className='info'>
            <h1>Order Summary</h1>
            <h3>Items Ordered: {cart.length} </h3>
            <p>Product Price: {total}</p>
            <p>Shipping Price: {shipping}</p>
            <p>Total price: {total+shipping}</p>
        </div>
    );
};

export default Cart;