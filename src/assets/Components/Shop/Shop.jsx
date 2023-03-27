import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'
const Shop = () => {
    let [products, setProducts] =useState([]);
    useEffect(() =>{
fetch("products.json")
  .then((res) => res.json())
  .then((data) => setProducts(data));
    },[])
    return (
        <div className='Shop-container'>
            
<div className="item-container">
    {
        products.map(product => <Products 
            key={product.id}
            product ={product}
        ></Products>)
    }
    
</div>
<div className="cart-container">
    <h2>Its the cart items</h2>
</div>
        </div>
    );
};

export default Shop;