import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022")
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear)
  }

  const filterExpenses = props.item.filter(expense=>{
return expense.date.getFullYear().toString() === filterYear;
  })
  return <div><Card className="expenses">
    <ExpensesFilter selected={filterYear} onAdd={filterChangeHandler} />
    {filterExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}

  </Card></div>

}


export default Expenses;