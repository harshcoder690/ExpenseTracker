import React, { useState } from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, SetEnteredTitle] = useState("");
    const [enterAmount, setAmount] = useState("");
    const [enterDate, setDate] = useState("");

    const eventHandler = (event) => {
        SetEnteredTitle(event.target.value);
    }
    const AmountHandler = (event) => {
        setAmount(event.target.value);
    }
    const DateHandler = (event) => {
        setDate(event.target.value);
    }

    const formdataHandler = (event) => {
        event.preventDefault();
         const data = {
             name: enteredTitle,
             cost: enterAmount,
             date: new Date(enterDate)
         }
         props.onstateChange(data);
         setAmount("");
         setDate("");
         SetEnteredTitle("");

    }

    return (
        <form onSubmit={formdataHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value = {enteredTitle} onChange={eventHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value = {enterAmount} onChange={AmountHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" value = {enterDate} max="2024-01-01" onChange={DateHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;