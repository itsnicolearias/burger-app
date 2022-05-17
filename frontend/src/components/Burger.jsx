import React, {useState}  from 'react';

import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import BurgerCard from './BurgerCard';

import { burgers } from '../services/burgers.json';



export default function Burger() {

   

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
