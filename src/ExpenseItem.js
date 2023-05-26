import React from 'react';
import './App.css';

function ExpenseItem({ name, amount, date, remove, index, edit }) {
  return (
    <div className="display">
      <button onClick={() => edit(index)}>Edit</button>
      <br />
      <div className="info">
        <div className="info-in">{name}</div>
        <div className="info-in">{amount}</div>
        <div className="info-in">{date}</div>
      </div>
      <br />
      <button onClick={() => remove(index)}>Delete</button>
    </div>
  );
}

export default ExpenseItem;
