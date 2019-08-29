import React from 'react';
import design from './PricingPlan.module.css';
import PricingItem from '../PricingItem/PricingItem.js';

const PricingPlan = ({ items }) => (
  <ul className={design.pricing_plan}>
    {items.map(item => (
      <PricingItem key={item.price} el={item} />
    ))}
  </ul>
);

export default PricingPlan;
