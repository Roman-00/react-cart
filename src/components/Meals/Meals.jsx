import React from 'react';

/* Импортируем компоненты */
import { MealsSummary } from './MealsSummary';
import { AvailableMeals } from './AvailableMeals';

export const Meals = () => {
    return (
        <>
            <MealsSummary />
            <AvailableMeals />
        </>
    );
};