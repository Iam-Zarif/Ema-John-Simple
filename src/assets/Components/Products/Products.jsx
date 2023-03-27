import React from 'react';
import './Products.css'
const Products = (props) => {
    console.log(props);
    let { img, name, seller, quantity, ratings, price } = props.product;
    return (
      <div className="products-img-div">
        <img className="Products-img" src={img} alt="" />
        <h2>Name : {name}</h2>
        <h3>Price : ${price}</h3>
        <div className="details-foot">
          <h4>Manufacturer : {seller}</h4>
          <h4>Ratings : {ratings} start</h4>
          <button className='Btn'>Add to Cart</button>
        </div>
      </div>
    );
};

export default Products;