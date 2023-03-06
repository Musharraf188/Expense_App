import "./ExpenseForm.css";

const ExpenseForm = () => {
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control label">
                <label>Title</label>
                <input type="text"></input>
            </div>
            <div className="new-expense__control label">
                <label>Amount</label>
                <input type="text"></input>
            </div>
            <div className="new-expense__control label">
                <label>Date</label>
                <input type="text"></input>
            </div>
        </div >
        <div className="new-expense__actions ">
        <button type="submit">Add Expense</button>
        </div>
    </form>

}

export default ExpenseForm;