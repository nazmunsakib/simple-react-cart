import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let totalPrice = 0;
    let quantity = 0;
    let shipping = 0;

   console.log(props);
    
    for(const product of cart ){
        quantity = quantity + product.quantity;
        totalPrice = totalPrice +  product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    const tax = totalPrice * 7 /100;
    const grandTotal = totalPrice + shipping + tax;

    return (
        <div className="order-info">
            <h2>Shop Info</h2>
            <p>Selected Items : {quantity}</p>
            <p>Total Price: ${totalPrice}</p>
            <p>Shipping cost: ${shipping.toFixed(2)}</p>
            <p>VAT(7%): ${tax.toFixed(2)}</p>

            <h3>Grand Total: ${grandTotal}</h3>
        </div>
    );
};

export default Cart;