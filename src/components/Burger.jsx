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
        <div className='card col-md-4 text-center card-group'  key={id}>
        <div className="card" >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGpx23cDdEMJgTi73BXjG9-baVb_Yw5mSvVw&usqp=CAU" className="card-img-top" alt="burger" />
                <div className="card-body">
                <h3 className="card-title">{nombre}</h3>
                <h4 className="card-text">${precio}</h4>
                { burgers ? 
                    (<button type='button' className='btn btn-primary' onClick={() => addBurger(id)}>Agregar al carrito</button>)
                    : ( <div>
                        <button type='button' className='btn btn-success' onClick={() => addBurger(id)}>Confirmar</button>
                        
                    <button type='button' className='btn btn-danger' onClick={() => delBurger(id)}>Eliminar</button>   
                    </div> )
                    
                    }
       </div>
        </div>
           
             </div>  
           
       
    );
}

export default Burger;
