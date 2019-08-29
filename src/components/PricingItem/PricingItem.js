import React from 'react';
import design from './PricingItem.module.css';

const PricingItem = ({ el }) => {
  const { label, icon, capacity, description, price } = el; // props destructurization
  let color;
  if (label === 'Bronze') {
    color = '#cc6633';
  } else if (label === 'Silver') {
    color = 'silver';
  } else {
    color = 'gold';
  }

  return (
    <li className={design.pricing_item}>
      <img src={icon} className={design.icon} />
      <h2 className={design.label} style={{ color }}>
        {label}
      </h2>
      <p className={design.capacity}>{capacity} storage</p>
      <p className="description">{description}</p>
      <p className={design.price}>${price}/MO</p>
      <button
        type="button"
        className={design.button}
        style={{ background: color }}
      >
        Get Started
      </button>
    </li>
  );
};

export default PricingItem;
