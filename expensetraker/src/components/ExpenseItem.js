// First components for Render List data..
import "./ExpenseItem.css";
const ExpenseItem =(props) =>{
const month= props.date.toLocaleString('en-US', {month : 'long'});
const day= props.date.toLocaleString('en-US', {day : '2-digit'});
const year= props.date.getFullYear();

// const month = props.date.toLocaleString('en-US', { month: 'long' })
// const day = props.date.toLocaleString('en-US', { day: '2-digit' })
// const year = props.date.getFullYear()
    return <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
        <div>
            <h2>{props.title}</h2>
            <div>${props.amount}</div>
        </div>
    </div>
}

export default ExpenseItem;