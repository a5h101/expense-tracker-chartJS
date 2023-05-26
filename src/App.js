import React, { useState, useEffect } from 'react';
import ExpenseItem from './ExpenseItem';
import BarChart from './chart';
import './index.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [chartData, setChartData] = useState(null);
  const [currentExpense, setCurrentExpense] = useState(null);

  const addExpense = expense => {
    setExpenses(prevExpenses => [...prevExpenses, expense]);
  };

  useEffect(() => {
    if (expenses.length <= 0) {
      setChartData(null);
    }
  }, [expenses]);

  const remove = i => {
    setExpenses(prevExpenses => prevExpenses.filter((_, index) => index !== i));
  };

  const edit = i => {
    setCurrentExpense({ ...expenses[i], index: i });
    console.log(currentExpense);
  };

  const handleSubmit = event => {
    console.log(expenses, 'hi', currentExpense);
    event.preventDefault();
    const name = event.target.name.value;
    const amount = event.target.amount.value;
    const date = event.target.date.value;
    console.log(name, amount, date);
    if (name && amount && date) {
      if (currentExpense !== null) {
        setExpenses(prevExpenses => {
          const newExpenses = [...prevExpenses];
          newExpenses[currentExpense.index] = { name, amount, date };
          return newExpenses;
        });
        setCurrentExpense(null); // reset the currentExpense state
      } else {
        addExpense({ name, amount, date });
      }
      event.target.reset();
    }
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
            <input
              type="text"
              name="name"
              placeholder="Expense Name"
              defaultValue={currentExpense?.name}
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              defaultValue={currentExpense?.amount}
            />
            <input
              type="date"
              name="date"
              placeholder="Date"
              defaultValue={currentExpense?.date}
            />
            <button className="submit" type="submit">
              {currentExpense !== null ? 'Update Expense' : 'Add Expense'}
            </button>
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
                edit={edit}
              />
            ))}
          </div>
        </div>
        <div className="charts">
          {chartData && expenses && <BarChart chartData={chartData} />}
        </div>
      </div>
    </>
  );
}

export default App;
