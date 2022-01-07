import React, { useState } from 'react'

// Import component
import Card from "../UI/Card";
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';
import ExpenseChart from './ExpenseChart';


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




    return (

        <Card className="expense">

            <ExpenseFilter onSelected={selectedHandler} selected={selected} />
            <ExpenseChart expenses={filteredExpense} />
            <ExpenseList items={filteredExpense} />


        </Card>

    )
}
