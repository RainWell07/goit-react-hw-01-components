import React from "react";
import PropTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead className="transaction-header">
        <tr className="transaction-header-types">
          <th className="transaction-header-childs">TYPE</th>
          <th className="transaction-header-childs">AMOUNT</th>
          <th className="transaction-header-childs">CURRENCY</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr className="transaction-tr" key={item.id}>
            <td className="transaction-item">{item.type}🧾</td>
            <td className="transaction-item">{item.amount}💹</td>
            <td className="transaction-item">{item.currency}💱</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};


export default TransactionHistory;
