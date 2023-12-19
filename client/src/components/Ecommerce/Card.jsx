// Card.jsx
import React from 'react';
import './Card.css';

const Card = ({ price, title, description, thumbnail }) => {
  return (
    <div>
      <div className="card">
        <div className="cardimg">
          <img src={thumbnail} alt="Product Thumbnail" />
        </div>
        <div className="card-body">
        <div className="card-price">${price}</div>
          <div className="card-title">{title}</div>
          <div className="card-text">{description.slice(0, 39)}...</div>
        <div className="buy_product">
          <a href="/oneProduct" className="btn-primary">Buy Products</a>
          <i class="fa-solid fa-cart-shopping" id='cart'></i>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
