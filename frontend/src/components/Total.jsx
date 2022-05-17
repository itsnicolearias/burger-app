import { Button } from '@mui/material';
import React from 'react';
import { getTotalBasket } from '../services/reducer';
import { useStateValue } from '../services/StateProvider';
import accounting from "accounting";


const Total = () => {

    const [{basket}, dispatch] = useStateValue();

    return (
        <div>
            <h1>Cantidad de items:{basket?.length}</h1>
            
                <h3>{accounting.formatMoney(getTotalBasket(basket), '$')}</h3>
                
            
            <Button className='classes.button' variant='contained' >Checkout</Button>
        </div>
    );
}

export default Total;
