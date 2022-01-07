import React from 'react'

//Import css
import "./ExpenseFilter.css"

export default function ExpenseFilter(props) {

    const selectHandler = (event) => {
        console.log(event.target.value)
        props.onSelected(event.target.value)
    }

    return (
        <div>
            <h4>Filter year : </h4>
            <select onChange={selectHandler} value={props.selected} name="yearFilter" id="yearFilter">
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
            </select>
        </div>
    )
}
