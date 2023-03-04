import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

function App(){
  const expenses =[
    {
    title:"Car Insuranse",
    amount:237.67,
    date: new Date(2022, 9, 15)
  },
    {
    title:"Car Insuranse",
    amount:237.67,
    date: new Date(2022, 9, 15)
  },
    {
    title:"Car Insuranse",
    amount:237.67,
    date: new Date(2022, 9, 15)
  },
    {
    title:"Car Insuranse",
    amount:237.67,
    date: new Date(2022, 9, 15)
  },
]
  return <div > 
  <Expenses item={expenses} />
  </div>
}

export default App;
