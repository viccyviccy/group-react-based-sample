import React from 'react';
import PropTypes from 'prop-types';
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

Stats.defaultProps = {
  title: 'Upload stats',
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Stats;

// array of shape
