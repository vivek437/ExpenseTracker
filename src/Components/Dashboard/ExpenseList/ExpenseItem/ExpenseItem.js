import "./ExpenseItem.css";

function ExpenseItem({ item }) {
  console.log(item);
  return (
    <div key={item.id} className="expense-item">
      <h1>{item.title}</h1>
      <p>Cost :{item.cost}</p>
      <p>Date :{item.date}</p>
    </div>
  );
}

export default ExpenseItem;
