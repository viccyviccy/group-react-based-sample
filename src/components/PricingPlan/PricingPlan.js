import React from 'react';
import PropTypes from 'prop-types';
import design from './PricingPlan.module.css';
import PricingItem from '../PricingItem/PricingItem';

const PricingPlan = ({ items }) => (
  <ul className={design.pricing_plan}>
    {items.map(item => (
      <PricingItem key={item.price} el={item} />
    ))}
  </ul>
);

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default PricingPlan;
