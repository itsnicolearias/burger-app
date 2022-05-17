import React from 'react';
import { useStateValue } from '../services/StateProvider';
import Checkoutcard from '../components/CheckoutCard';
import Grid from '@mui/material/Grid';
import Total from '../components/Total';

const Checkoutpage = () => {


const [{basket}, dispatch] = useStateValue();   
    

return (
        <React.Fragment>
         
         <Grid item xs={12}> 
         <h3>Carrito de compras</h3>
         </Grid>
        
            
                {basket?.map((item) => (
                    <Grid item xs={6} sm={4} md={3}>
                        <Checkoutcard 
                         key={item.id}
                         item={item}
                        />
                    </Grid>
                        
                ))}
            <Total />
        </React.Fragment>
    );
}

export default Checkoutpage;
