import React from 'react';
import './App.css';

function ExpenseItem({ name, amount, date, remove, index }) {
  return (
    <div className="display">
      <div>{name}</div>
      <div>{amount}</div>
      <div>{date}</div>
      <br />
      <button onClick={() => remove(index)}>Delete</button>
    </div>
  );
}

export default ExpenseItem;
