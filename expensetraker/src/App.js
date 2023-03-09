// Root Compponent for rendering all custom components..

import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpense";



const App = () => {
  const DUMMY_EXPENSES= [
    {
      id:1,
      date: new Date(2023, 3, 12),
      title: "Car Insurance",
      amount: 234.87
    },

    {
      id:2,
      date: new Date(2023, 1, 30),
      title: "Home Expenses",
      amount: 875.87
    },

    {
      id:3,
      date: new Date(2022, 9, 11),
      title: "Bike Purchase",
      amount: 453.87
    },

    {
      id:4,
      date: new Date(2022, 4, 19),
      title: "Self Expenses",
      amount: 995.87
    },
  ]
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const saveData =(userInput)=>{
setExpenses(dummyExpenses=>{
  return [userInput, ...dummyExpenses];
})
  }
  return <div>
    <NewExpenses onAddItem={saveData} />
<Expenses item={expenses} />
  </div> 
}

export default App;