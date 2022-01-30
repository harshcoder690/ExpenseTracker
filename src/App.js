import React, { useState } from "react";

import Expenses from "../src/components/Expense/Expenses";
import NewExpense from "../src/components/NewExpense/NewExpense";

const items = [{
  id: 1,
  date: new Date(2020, 15, 3),
  name: "Milk",
  cost: 250
},
{
  id: 2,
  date: new Date(2021, 10, 3),
  name: "Tea",
  cost: 150
},
{
  id: 3,
  date: new Date(2021, 5, 3),
  name: "Wooden blocks",
  cost: 2500
},

{
  id: 4,
  date: new Date(2020, 30, 3),
  name: "Carpets",
  cost: 1000
}
]

function App() {

  const [expenses, setExpenses] = useState(items);

  const ItemHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

  };


  return (
    <div>
      <NewExpense addListItem={ItemHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
