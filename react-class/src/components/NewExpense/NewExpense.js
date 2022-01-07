import React from 'react'

// Import components
import ExpenseForm from './ExpenseForm';

// Import css
import "./NewExpense.css";

export default function NewExpense(props) {

    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
       
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onSaveExpense={saveExpenseDateHandler} />
        </div>
    )
}
