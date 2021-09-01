import React from 'react';

/* Импортируем стили */
import styles from './Cart.module.css';

export const Cart = (props) => {

    const cartItems = [
        { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 },
    ].map((item) => <li>{item.name}</li>)

    return (
        <div>
            <div>
                {cartItems}
            </div>
            <div></div>
        </div>
    );
};