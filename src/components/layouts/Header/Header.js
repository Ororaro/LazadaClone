import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Header.css'
import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import { useShoppingCart } from '../../../management/context';
import CartItem from './CartItem';
import ShoppingCart from './ShoppingCart';

function DrawerAppBar() {
    const { openCart,cartQuantity } = useShoppingCart()
    return (
        <Box >
            <AppBar component="nav">
                <Container maxWidth="lg">
                    <Box className="control-head" >
                        <img src={`https://logos-world.net/wp-content/uploads/2022/06/Lazada-Logo.png`} width="12%" />
                        <Box className="search" >
                            <input type='text' placeholder='Search in Lazada' />
                            <Box className="search-cart">
                                <Button><SearchIcon style={{ color: 'white', fontSize: "30px" }} /></Button>
                            </Box>
                        </Box>
                        <Box className="cart" >
                            <ShoppingCartIcon style={{ fontSize: "35px", color: '#000', cursor: 'pointer' }} onClick={openCart} />
                            <Box className="amount-cart">
                                <Typography variant='h5' style={{ color: 'red' }}>{cartQuantity}</Typography>
                            </Box>
                        </Box>
                        <Box className="icon-head" sx={{display:{md:'flex',sm:'flex',xs:'none'}}}>
                            <img src={`https://laz-img-cdn.alicdn.com/images/ims-web/TB18s7ESBr0gK0jSZFnXXbRRXXa.jpg`} width="90%" />
                        </Box>
                    </Box>
                </Container>
            </AppBar>


        </Box>
    );
}



export default DrawerAppBar;

