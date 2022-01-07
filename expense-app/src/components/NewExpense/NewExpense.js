import React, { useState } from 'react'


// Import components
import ExpenseForm from './ExpenseForm';

// Import css
import "./NewExpense.css";

export default function NewExpense(props) {
    const [formVisible, setFormVisible] = useState(false);

    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
    }
    const formVisibleHandler = (event) => {
        setFormVisible(true);
    }

    if (formVisible === true) {
        return <div className='new-expense'>
            <ExpenseForm
                onSaveExpense={saveExpenseDateHandler}
                formVisible={setFormVisible} />
        </div>
    }

    return (
        <div className='new-expense'>
            <button onClick={formVisibleHandler}>Add Expense</button>
        </div>
    )
}
