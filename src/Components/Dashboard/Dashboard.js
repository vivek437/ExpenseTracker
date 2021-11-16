import { useState } from "react";
import "./Dashboard.css";
import ExpenseForm from "./ExpenseForm/ExpenseForm";
import ShowExpenseList from "./ExpenseList/ExpenseList";

let fetchedExpenses = [
  {
    id: 1,
    title: "TV",
    cost: "500$",
    date: "20/01/2021",
  },
  {
    id: 2,
    title: "Bike",
    cost: "1000$",
    date: "20/05/2021",
  },
  {
    id: 3,
    title: "Shoes",
    cost: "45$",
    date: "20/04/2021",
  },
];

function Dashboard() {
  const [expense, setExpense] = useState(fetchedExpenses);

  const onSaveExpenseData = (newExpense) => {
    const expenseData = {
      ...newExpense,
      id: Math.random().toString(),
    };
    console.log(expenseData);

    setExpense((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
    console.log(expense);
  };

  return (
    <>
      <h1 class="toolbar">Expense tracker</h1>
      <div className="container">
        <ExpenseForm onSaveExpenseData={onSaveExpenseData} />
        <ShowExpenseList expenseList={expense} />
      </div>
    </>
  );
}

export default Dashboard;
