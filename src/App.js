import React from 'react';

/* Импортируем компоненты */
import { Header } from './components/Header/Header';
import { Meals } from './components/Meals/Meals';

const App = () => {

  return (
    <>
      <Header/>

      <main>
        <Meals />
      </main>
      
    </>
  );

}

export default App;
