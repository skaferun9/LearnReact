import React from 'react'
//Import 
import ExpenseItem from './ExpenseItem';

export default function ExpenseList(props) {

    if (props.items.length === 0) {
        return <h2>No Expense on this year!</h2>
    }

    return (

        <div>
            {props.items.map((expense) => {
                return <ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    price={expense.amount} />
            })}
        </div>

    )
}
