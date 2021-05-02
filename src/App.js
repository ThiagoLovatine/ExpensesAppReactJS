import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    title: "asfc235sd",
    amount: 435.34,
    date: new Date(2021, 2, 20),
    id: "1",
  },
  {
    title: "345v34556",
    amount: 125.35,
    date: new Date(2021, 2, 20),
    id: "2",
  },
  {
    title: "etrune56a",
    amount: 672.73,
    date: new Date(2021, 2, 20),
    id: "3",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const handleSaveNewExpense = (expense) => {
    setExpenses((previousData) => {
      return [expense, ...previousData];
    });
  };

  return (
    <div className="App">
      <NewExpense onSaveNewExpense={handleSaveNewExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
