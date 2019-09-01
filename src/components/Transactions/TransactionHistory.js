import React from 'react';
import PropTypes from 'prop-types';
import design from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={design.transaction_history}>
      <thead className={design.table_thead}>
        <tr className={design.table_main}>
          <th className={design.line_size}>Type</th>
          <th className={design.line_size}>Amount</th>
          <th className={design.line_size}>Currency</th>
        </tr>
      </thead>
      <tbody className={design.table_main_2}>
        {items.map(item => (
          <tr key={item.id}>
            <td className={design.line_size2}>{item.type}</td>
            <td className={design.line_size2}>{item.amount}</td>
            <td className={design.line_size2}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionHistory;
