import React from 'react';
import './Product.css';

const Product = (props) => {
    const {name, img, category, price, quantity} = props.product;
    console.log(props);
    return (
        <div className='product-item'>
            <div className="product-inner">
                <div className="product-item-info">
                    <img src={img} width="286" height="286" alt={name} />
                    <h3>{name}</h3>
                    <p>Price: {price}</p>
                </div>
                <a href="" className="add-to-cart">Add to cart</a>
            </div>
        </div>
    );
};

export default Product;