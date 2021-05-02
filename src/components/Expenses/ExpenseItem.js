import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);

  const changeTitle = () => {
    console.log('asd');
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">R${props.amount}</div>
      </div>
      <button onClick={changeTitle}>Change title</button>
    </Card>
  );
}
