import {createContext, useReducer, useContext} from 'react'


//CREATECONTEXT CREA EL CONTEXTO PARA PASAR VARIABLES DE UN COMPONENTE A OTRO
//STATE PROVIDER NOS VA A PROVEER LAS HERRAMIENTAS PARA PASAR ESAS VARIABLES
//STATE VALUE NOS VA A PERMITIR CONSUMIR LOS CAMBIOS DE ESTADO DESDE CUALQUIER COMPONENTE

export const StateContext = createContext();

export const  StateProvider = ({ reducer, initialState, children}) => (
 <StateContext.Provider value={useReducer(reducer, initialState)}>
     {children}
 </StateContext.Provider>

);

export const useStateValue = () => useContext(StateContext);
