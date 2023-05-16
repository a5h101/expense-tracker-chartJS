import React from 'react';
import './App.css';

function ExpenseItem({ name, amount, date, remove, index, edit }) {
  return (
    <div className="display">
      <button onClick={() => edit(index)}>Edit</button>
      <br />
      <div>{name}</div>
      <div>{amount}</div>
      <div>{date}</div>
      <br />
      <button onClick={() => remove(index)}>Delete</button>
    </div>
  );
}

export default ExpenseItem;
