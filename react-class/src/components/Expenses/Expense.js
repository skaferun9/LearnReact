import React from 'react'

// Import component
import Card from "../UI/Card";
import ExpenseItem from './ExpenseItem';

// Import css
import "./Expense.css";

export default function Expense() {
    const date = new Date(2022, 5, 12)
    
    return (
        <Card className="expense">
            <ExpenseItem date={date} title={"New car"} price={3999.59} />
            <ExpenseItem date={date} title={"New car"} price={3999.59} />
            <ExpenseItem date={date} title={"New car"} price={3999.59} />
        </Card>
    )
}
