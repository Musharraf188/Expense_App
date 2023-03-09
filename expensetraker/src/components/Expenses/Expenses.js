import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022")
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  }



  const filterExpenses = props.item.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  })
  return <div><Card className="expenses">
    <ExpensesFilter selected={filterYear} onAdd={filterChangeHandler} />
    <ExpensesChart expenses={filterExpenses}/>
<ExpensesList item={filterExpenses} />
    
   
  </Card></div>

}


export default Expenses;