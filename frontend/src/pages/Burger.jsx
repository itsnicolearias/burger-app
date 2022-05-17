import React, {useState , useEffect}  from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import BurgerCard from '../components/BurgerCard';
import { getAllBurgers } from '../services/burgerService';





export default function Burger() {

  const [burgers, setBurgers] = useState([])

  //funcion que conecta con el backend y permite obtener los post   
 const getBurgers = async () => {
  const res = await getAllBurgers()
  console.log(res.data)
  setBurgers(res.data)

}

useEffect(() => {
  getBurgers()
}, []);
   

  return (

    <React.Fragment>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        
     {burgers.map((burger) => (
        <Grid item xs={6} sm={4} md={3}>
           <BurgerCard 
          key={burger.id}
          burgers={burgers}
          burger={burger}
          />
            </Grid> 
        ))}  
      
         
       
        
      </Grid>
    </Box>
 </React.Fragment> 
 );
}
