// Root Compponent for rendering all custom components..

import Expenses from "./components/Expenses";



const App =() =>{
  const expenses =[
    {
  date : new Date(2023, 3, 12),
   title : "Car Insurance",
   amount : 234.87
  },

  {
    date : new Date(2023, 1, 30),
     title : "Home Expenses",
     amount : 234.87
    },

    {
      date : new Date(2022, 9, 11),
       title : "Bike Purchase",
       amount : 234.87
      },

      {
        date : new Date(2022, 4, 19),
         title : "Self Expenses",
         amount : 234.87
        },
]
  return <Expenses item={expenses}/>
}
export default App;