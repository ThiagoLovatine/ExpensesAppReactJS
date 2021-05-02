import React, { useState } from "react";

import "./ExpenseForm.css";

export default function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const [showForm, setShowForm] = useState(false);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      const expenseData = {
        title,
        amount: +amount,
        date: new Date(date),
      };
      props.onSaveNewExpense(expenseData);
      cleanUpForm();
    }
  };

  const cleanUpForm = () => {
    setTitle("");
    setAmount("");
    setDate("");
  };

  const validateForm = () => {
    return title.trim() && amount.trim() && date.trim();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      {showForm && (
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              name="title"
              onChange={titleChangeHandler}
              value={title}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              name="amount"
              onChange={amountChangeHandler}
              value={amount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              name="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangeHandler}
              value={date}
            />
          </div>
        </div>
      )}
      <div className="new-expense__actions">
        <button
          type="submit"
          onClick={() => {
            if (!showForm) {
              setShowForm(true);
            }
          }}
        >
          Add expense
        </button>
      </div>
    </form>
  );
}
