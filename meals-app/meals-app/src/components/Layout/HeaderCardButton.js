import React, { Fragment, useContext, useEffect, useState } from 'react';

import classes from './HeaderCardButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

export default function HeaderCardButton(props) {
    const [btnIsHighLighted, setBtnisHighLighted] = useState(false);
    const cartCtx = useContext(CartContext);
    const numberOfCartItem = cartCtx.items.reduceRight((curNumber, item) => {
        return curNumber + item.amount
    }, 0)

    const { items } = cartCtx;


    const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump : ''}`

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnisHighLighted(true);

        const timer = setTimeout(() => {
            setBtnisHighLighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        }

    }, [items]);
    return (
        <button className={btnClasses} onClick={props.onShowCart} >
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItem}</span>
        </button>
    )
}
