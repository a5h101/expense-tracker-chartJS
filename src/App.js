import React, { useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import BarChart from './chart';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [chartData, setChartData] = useState(null);

  const addExpense = expense => {
    setExpenses(prevExpenses => {
      return [...prevExpenses, expense];
    });
    // console.log(expenses);
    // expenses.sort();
  };

  useEffect(() => {
    if (expenses.length <= 0) {
      setChartData(null);
    }
  }, [expenses]);

  const remove = i => {
    setExpenses(prevExpenses => {
      const newExpenses = [...prevExpenses];
      newExpenses.splice(i, 1);
      return newExpenses;
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.name.value;
    const amount = event.target.amount.value;
    const date = event.target.date.value;
    if (name && amount && date) addExpense({ name, amount, date });
    event.target.reset();
  };

  useEffect(() => {
    if (expenses.length > 0) {
      const labels = expenses.map(expense => expense.date);
      const data = expenses.map(expense => expense.amount);
      setChartData({ labels, data });
    }
  }, [expenses]);

  return (
    <>
      <div id="box">
        <div>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Expense Name" />
            <input type="number" name="amount" placeholder="Amount" />
            <input type="date" name="date" placeholder="Date" />
            <button type="submit">Add Expense</button>
          </form>
          <div className="expenses">
            {expenses.map((expense, index) => (
              <ExpenseItem
                key={index}
                index={index}
                name={expense.name}
                amount={expense.amount}
                date={expense.date}
                remove={remove}
              />
            ))}
          </div>
        </div>
        <div>{chartData && expenses && <BarChart chartData={chartData} />}</div>
      </div>
    </>
  );
}

export default App;
