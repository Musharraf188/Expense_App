import ExpenseForm from "../Expenses/ExpenseForm";
import "./NewExpenses.css";

const NewExpenses =(props) =>{
    const savaDataHandler=(expenseData)=>{
const userInput={
    ...expenseData,

}
props.onAddItem(userInput);
    }
    return <div className="new-expense">
   <ExpenseForm onSaveExpenseData={savaDataHandler}/>
    </div>
}

export default NewExpenses;