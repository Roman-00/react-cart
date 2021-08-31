import React from 'react';

/* Импортируем стили */
import styles from './Card.module.css';

export const Card = ({ children }) => {
    return (
        <div className={styles.card}>
            { children }
        </div>
    );
};