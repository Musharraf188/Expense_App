
import "./Expenses.css";

import ExpenseItem from "./ExpenseItem";

const Expenses =(props) =>{
    return <div className="expenses">
    <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date} />
    <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date} />
    <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date} />
    <ExpenseItem title={props.item[0].title} amount={props.item[0].amount} date={props.item[0].date} />
           </div>
}

export default Expenses;