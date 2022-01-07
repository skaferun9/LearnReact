import React from 'react';

// Import css
import "./Card.css"

export default function Card(props) {
    const classes = 'card ' + props.className;
    console.log(classes)
    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}
