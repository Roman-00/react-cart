import React from 'react';

/* Импортируем компоненты */
import { HeaderCartButton } from './HeaderCartButton';

/* Импортируем изображения */
import mealsImage from '../../assets/images/meals.jpg';

/* Импортируем стили */
import styles from './Header.module.css';

export const Header = (props) => {

    return (

        <>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={styles['main-image']}>
                <img src={mealsImage} alt="Meals Images" />
            </div>

        </>

    );

};