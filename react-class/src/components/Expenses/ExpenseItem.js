import React from 'react';

// Import component
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// Import css
import "./ExpenseItem.css";




export default function ExpenseItem(props) {

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
        </Card>)
}


