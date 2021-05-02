import ExpenseItem from "./components/Expenses/ExpenseItem";

const App = () => {
  const expenses = [
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

  return (
    <div className="App">
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div> 
  );
}

export default App;
