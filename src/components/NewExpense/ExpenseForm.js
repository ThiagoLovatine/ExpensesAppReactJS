import React from "react";

import "./ExpenseForm.css";

export default function ExpenseForm() {
  return (
    <form className="newExpense">
      <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" name="title" />
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" name="amount" />
        </div>
        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" name="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
}
