import React from "react";
import TransactionsCSS from "../TransactionHistory/transactionHistory.module.css"

const TransactionHistory = ({ items }) => {
    return (
    <table className={TransactionsCSS.table}>
      <thead className={TransactionsCSS.title}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={TransactionsCSS.content}>
        {items.map(({ id, type, amount, currency }, index) => (
          <tr key={id} className={index % 2 === 0 ? TransactionsCSS.evenRow : TransactionsCSS.oddRow}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
