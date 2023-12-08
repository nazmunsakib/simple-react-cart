import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data) );
    },[]);

    const [cart, setCart] = useState([]);

    const cartHandler = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart);
    }

    const totalPrice = () =>{
        let result = 0;
        cart.map( product  =>{
            result += product.price
        })

       return result;
    }

    totalPrice();
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map( product => <Product
                    key={product.id}
                    product={product}
                    cartHandler={cartHandler}
                    ></Product>)
                }
            </div>
            <div className="shop-sidebar">
                <div className="order-info">
                    <h2>Shop Info</h2>
                    <p>Selected Items : {cart.length}</p>
                    <p>Total Price: ${totalPrice()}</p>
                </div>
            </div>
        </div>
    );
};

export default Shop;