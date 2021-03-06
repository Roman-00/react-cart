import React from 'react';

/* Импортируем компоненты */
import { MealItemForm } from './MealItemForm';

/* Импортируем стили */
import styles from './MealItem.module.css';

export const MealItem = (props) => {

    const price = `$${props.price.toFixed(2)}`;

    return (
        <li className={styles.meal}>
            <div>
                <h3>
                    {props.name}
                </h3>
                <div className={styles.description}>
                    {props.description}
                </div>
                <div className={styles.price}>
                    {price}
                </div>
            </div>
            <div>
                <MealItemForm />
            </div>
        </li>
    );
};