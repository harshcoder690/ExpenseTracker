import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import ExpensesFilter from './Expensefilter';
import ExpensesChart from "./ExpenseChart";

function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredexpense = props.item.filter((expense) =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })

  return (
    <div className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredexpense} />
      {filteredexpense.length === 0 ? <p className="expenses-list__fallback">No Expense Found</p> : filteredexpense.map((expense) => (<ExpenseItem title={expense.name} date={expense.date} cost={expense.cost} />))}
    </div>
  );
}
export default Expenses;
