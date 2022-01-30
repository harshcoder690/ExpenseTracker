import React from "react";

import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) =>{

    const stateHandler = (extract) =>{
        const expenseData = {
            ...extract,
            id: Math.random().toString()
          };
          props.addListItem(expenseData);
    }
    return (
        <div className="new-expense">
           <ExpenseForm onstateChange = {stateHandler}/>
        </div>
    );
}

export default NewExpense;