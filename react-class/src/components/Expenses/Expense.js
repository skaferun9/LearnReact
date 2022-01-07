import React, { useState } from 'react'

// Import component
import Card from "../UI/Card";
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';

// Import css
import "./Expense.css";

export default function Expense(props) {
    const [selected, setSelected] = useState("2022")

    const selectedHandler = (select) => {
        setSelected(select);
    }
    const filteredExpense = props.items.filter(item => {
        return item.date.getFullYear().toString() === selected;
    })

    let expenseContent = <h2>No Expense on this year!</h2>

    if (filteredExpense.length > 0) {
        expenseContent = filteredExpense.map(item => {
            return <ExpenseItem key={item.id} date={item.date} title={item.title} price={item.amount} />
        })
    }


    return (
        <Card className="expense">
            <ExpenseFilter onSelected={selectedHandler} selected={selected} />
            {expenseContent}
        </Card>
    )
}
