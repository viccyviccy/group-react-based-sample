import React from 'react';
import design from './Statistics.module.css';

const Stats = ({ title, stats }) => (
  <section className={design.stats_section}>
    <h2 className={design.title_ma}>{title}</h2>
    <ul className={design.stat_list}>
      {stats.map(stat => (
        <li key={stat.id} className={design.li_stat}>
          <span className={design.label}>{stat.label}</span>
          <span className={design.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Stats;

/*
  <section className={design.stats_section}>
    {items.map(item => (
      <ul className={design.stat_list}>
        <li className={design.li_item}>
          <span className={design.label}>{item.lable}</span>
          <span className={design.percentage}>{item.percent}</span>
        </li>
      </ul>
    ))}
  </section>;
*/

// array of shape
