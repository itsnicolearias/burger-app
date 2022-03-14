import React from 'react';

const Burger = ({burger, burgers, cart, setCart}) => {

    const {id, nombre, precio} = burger;

    //funcion para agregar burgers al cart
    //CUANDO YO HAGO CLICK, PRIMERO FILTRO POR ID EL ESTADO DE LAS BURGERS
    //SI YA HAY ALGUNA BURGERS CARGADA, NO LA VA A REEMPLAZAR, LA VA A AGREGAR ABAJO
    const addBurger = (id) => {
        const burger = burgers.filter((burger) => burger.id === id);
        setCart([...cart, ...burger]);
    };
    
    const delBurger = (id) => {
        const burgers = cart.filter(burger => burger.id !== id);
        setCart(burgers)


    }
    
    return (
        <div>
            <ul>
                <li>{nombre}</li>
                <li>${precio}</li>
                { burgers ? 
                 (<button type='button' onClick={() => addBurger(id)}>Agregar al carrito</button>)
                 : ( <div>
                    <button type='button' onClick={() => addBurger(id)}>Confirmar</button>
                 <button type='button' onClick={() => delBurger(id)}>Eliminar</button>   
                  </div> )
                
                }
               
            </ul>
        </div>
    );
}

export default Burger;
