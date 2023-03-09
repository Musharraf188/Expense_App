import { useState } from "react";
import ExpenseForm from "../Expenses/ExpenseForm";
import "./NewExpenses.css";


const NewExpenses =(props) =>{
    const [isEditing, setIsEditing] = useState(false);
    const savaDataHandler=(expenseData)=>{
const userInput={
    ...expenseData,

}
props.onAddItem(userInput);
    }
    function isEditingHandler(){
        setIsEditing(true);
    }
    function stopEditing(){
        setIsEditing(false);
    }
    return <div className="new-expense">
        {!isEditing && <button onClick={isEditingHandler}>Add Expenses</button>}
  {isEditing && <ExpenseForm onSaveExpenseData={savaDataHandler} onCancel={stopEditing}/>}
    </div>
}

export default NewExpenses;