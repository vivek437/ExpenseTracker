import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem/ExpenseItem";

function ExpenseList({ expenseList }) {
  return (
    <div className="list-container">
      {expenseList.map((expense) => (
        <ExpenseItem key={expense.id} item={expense} />
      ))}
    </div>
  );
}

function ShowExpenseList({ expenseList }) {
  return <ExpenseList expenseList={expenseList} />;
}

export default ShowExpenseList;
