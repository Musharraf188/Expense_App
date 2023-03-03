import ExpenseItem from "./components/ExpenseItem";

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
  return <div> 
    <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
  </div>
}

export default App;
