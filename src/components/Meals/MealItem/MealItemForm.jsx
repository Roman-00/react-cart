import React from 'react';

/* Импортируем компоненты */
import { Input } from '../../UI/Input';

/* Импортируем стили */
import styles from './MealItemForm.module.css';

export const MealItemForm = (props) => {
    return (
        <form className={styles.form}>
            <Input label="Amount" input={{ 
                id: 'amount',
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '1'
             }}/>
            <button>+ Add</button>
        </form>
    );
};