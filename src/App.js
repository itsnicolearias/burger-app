import React,{useState, useEffect} from 'react';
import Burger from './components/Burger';
import Cart from './components/Cart';

const App = () => {

const [burgers, setBurgers] = useState([
  {id: 1, nombre: 'Santafesina', precio: 480},
  {id: 2, nombre: 'Porteña', precio: 550},
  {id: 3, nombre: 'Tucumana', precio: 430},
  {id: 4, nombre: 'Rosarina', precio: 560},
  {id: 5, nombre: 'Yankee', precio: 750}
]);

const [cart, setCart] = useState([]);

useEffect(() => {
  let data = localStorage.getItem('compras');
  if (data != null) {
    setCart(JSON.parse(data));
  }
}, []);

useEffect(() => {
 localStorage.setItem('compras', JSON.stringify(cart))

}, [cart]);


  return (
    <div>
      { burgers.map((burger) => (
        <Burger 
          key={burger.id}
          burger={burger}
          cart={cart}
          setCart={setCart}
          burgers={burgers}
        />
      ))}

      <Cart
      cart={cart}
      setCart={setCart}
      />
    </div>
  );
}

export default App;
