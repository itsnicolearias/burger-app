import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useStateValue } from '../services/StateProvider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';







const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function NavBar() {


  const [{basket}, dispatch] = useStateValue();  


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed"  >
        <Toolbar>
         
          <IconButton
            size="large"
            edge="start"
            color="primary"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          

          <Link to="./" className='btn btn-primary p-3' >SHOP</Link>
         
         <Link to="./signin" className='btn btn-primary p-3'  >Sign In</Link>
         
         <Link to="./checkoutpage" ><IconButton aria-label="cart">
            <StyledBadge badgeContent={basket?.length} color="primary">
              <ShoppingCartIcon color="inherit" />
            </StyledBadge>
         </IconButton></Link>
  
           
           


    


          
        </Toolbar>
      </AppBar>
    </Box>
  );
}






