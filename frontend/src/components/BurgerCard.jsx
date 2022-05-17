import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';


import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import  AddShoppingCart from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import { actionTypes } from '../services/reducer';
import { useStateValue } from '../services/StateProvider';
import Rating from '@mui/material/Rating';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BurgerCard   ({burger, burgers})  {

   const {_id, image, title, price, description} = burger;

    const [value, setValue] = React.useState(0);
    const [{basket}, dispatch] = useStateValue();
   

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        _id,
         title,
         image,
       price,
        
      }
    })
  }

  return (
    <span>
    
    <Card sx={{ maxWidth: 345 }}>
      <span>
      <CardHeader
        action={
            <Typography  variant='h5' color='red' >
              ${price}
            </Typography> }
            
       title={title}
        //subheader={}    
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
         <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Typography component="legend"></Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </Box>
          </Typography>
      </CardContent>
      </span>
      <span>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart" onClick={addToBasket} >
            <AddShoppingCart fontSize='large' />
          </IconButton>
    
    
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
     </span>
     <span>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
         <Typography paragraph>
            {description}
          </Typography>
         
        </CardContent>
          
         
      </Collapse>
      </span>
    </Card>
    
    </span>
  );
}
