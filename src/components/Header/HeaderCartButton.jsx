import React from 'react';

/* Импортируем компоненты */
import { CartIcon } from '../Cart/CartIcon'

/* Импортируем стили */
import styles from './HeaderCartButton.module.css';

export const HeaderCartButton = (props) => {

    return <button className={styles.button} onClick={props.onClick}>
        <span className={styles.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>
            3
        </span>
    </button>

};