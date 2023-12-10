import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data) );
    },[]);

    useEffect( () => {
        const stroedCart = getShoppingCart();
        const savedCart = [];
        for(const id in stroedCart ){
           const addedProducts = products.find( (product) => product.id === id );
           if(addedProducts){
            const quantity = stroedCart[id];
            addedProducts.quantity = quantity;
            savedCart.push(addedProducts);
           }
        }

        setCart(savedCart);
        
    }, [products]);

    const [cart, setCart] = useState([]);

    const cartHandler = (product) =>{
        const newCart = [...cart, product]
        setCart(newCart);
        addToDb(product.id);
    }

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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;