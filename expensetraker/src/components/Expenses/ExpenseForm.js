import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
const [userInput, setUserInput] = useState({
    expenseTitle:"",
    expenseAmount:"",
    expenseDate:""
})
    function titleHandler(event){
setUserInput((prevValue)=>{
    return {...prevValue, 
        expenseTitle:event.target.value}
})
    }
    function amountHandler(event){

setUserInput((prevValue)=>{
    return {...prevValue, expenseAmount:event.target.value}
})
    }
    function dateHandler(event){
setUserInput((prevValue)=>{
    return {...prevValue, expenseDate:event.target.value}
})
    }
    const submitHandler =(event)=>{
event.preventDefault();
const expenseData ={
    title:userInput.expenseTitle,
    amount:userInput.expenseAmount,
    date: new Date(userInput.expenseDate)
}
props.onSaveExpenseData(expenseData)
setUserInput({expenseTitle:"",expenseAmount:"", expenseDate:""})


    }
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control label">
                <label>Title</label>
                <input type="text" value={userInput.expenseTitle} onChange={titleHandler}></input>
            </div>
            <div className="new-expense__control label">
                <label>Amount</label>
                <input type="text" value={userInput.expenseAmount} onChange={amountHandler}></input>
            </div>
            <div className="new-expense__control label">
                <label>Date</label>
                <input type="date" value={userInput.expenseDate} onChange={dateHandler}></input>
            </div>
        </div >
        <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        </div>
    </form>

}

export default ExpenseForm;