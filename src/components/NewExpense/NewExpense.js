import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

function NewExpense(props) {
  const handleSaveNewExpense = (expense) => {
    const expenseData = {
      ...expense,
      id: generateId(),
    }
    props.onSaveNewExpense(expenseData);
  }

  const generateId = () => {
    const randomNumber = Math.floor(Math.random() * 900000000000) + 100000000000  ;
    const dateMiliseconds = new Date().getTime().toString();
    return randomNumber + '_' + dateMiliseconds
  }


  return (
    <div className="new-expense">
      <ExpenseForm onSaveNewExpense={handleSaveNewExpense} />
    </div>
  );
}

export default NewExpense;
