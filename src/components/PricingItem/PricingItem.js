import React from 'react';
import PropTypes from 'prop-types';
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
      <img src={icon} alt={label} className={design.icon} />
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

// PricingItem.defaultProps = {

// };

PricingItem.propTypes = {
  el: PropTypes.shape({
    label: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    capacity: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default PricingItem;
