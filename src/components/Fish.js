import React from 'react';
import { formatPrice } from '../helpers';

const Fish = ({ details }) => {
  const { image, name, price, desc, status } = details;
  return (
    <li className="menu-fish">
      <img src={image} alt={name} />
      <h3 className="fish-name">
        {name}
        <span className="price">{formatPrice(price)}</span>
      </h3>
      <p>{desc}</p>
      <button>Add To Cart</button>
    </li>
  );
};

export default Fish;