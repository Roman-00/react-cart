import React from 'react';

/* Импортируем компоненты */
import { Header } from './components/Header/Header';
import { Meals } from './components/Meals/Meals';
import { Cart } from './components/Cart/Cart';
import { CartProvider } from './store/CartProvider';

const App = () => {

  const [cartIsShown, setCartIsShown] = React.useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />

      <main>
        <Meals />
      </main>
      
    </CartProvider>
  );

}

export default App;
