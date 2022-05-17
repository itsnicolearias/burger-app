import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { actionTypes } from '../services/reducer';
import { useStateValue } from '../services/StateProvider';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';




import  DeleteIcon from '@mui/icons-material/Delete';






export default function CheckoutCard   ({item})  {

   const {id, title, price, image} = item;

   const [{basket}, dispatch] = useStateValue();

   const removeItem =  () => dispatch  ({
     type: actionTypes.REMOVE_ITEM,
     id: id,

   }) 

  

  
  

  return (
    <span>
    
    <Card sx={{ maxWidth: 345 }}>
      <span>
      <CardHeader
        action={
            <Typography  variant='h5' color='red' >
              ${price}
            </Typography> }
            
       //title={title}
        subheader={title}    
      />
    </span>
    <span>
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="ecommerce"
      />
      </span>
      <span>
      <CardContent>
          <Typography variant="body2" color="text.secondary">
          
          </Typography>
      </CardContent>
      </span>
      <span>
      <CardActions disableSpacing>
        <IconButton aria-label="delete"  onClick={removeItem} >
          <DeleteIcon fontSize='large' />
          
          </IconButton>
        
      
        
      </CardActions>
     </span>
    
    </Card>
    
    </span>
  );
}
