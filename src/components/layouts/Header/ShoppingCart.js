import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { useShoppingCart } from '../../../management/context'
import CartItem from './CartItem'
import Cart from '../../mock/Cart'
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import './ShoppingCart.css'
const ShoppingCart = ({ isOpen }) => {
  const { closeCart, cartQuantity, cartItems } = useShoppingCart()
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  return (
    <Box className="Box-shop">
      <Dialog
        open={isOpen}
        onClose={closeCart}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ textAlign: 'center', fontSize:{md:'50px',sm:'50px',xs:'35px'}, fontWeight: "900" }} id="alert-dialog-title">{"SHOP CART"}</DialogTitle>
          <DialogContent className='shopCart' >
            {cartQuantity > 0 ?
              cartItems.map((data, index) => {
                return (
                  <CartItem {...data} key={index} />
                )
              }) :
              <Box >
                <Typography variant='h3' sx={{ textAlign: 'center', borderTop: '2px solid red', borderBottom: '2px solid red', padding: '20px'}}>Empty!!</Typography>
              </Box>
            }
            {cartQuantity > 0 ?
              <Box className="total" sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography sx={{ fontSize: '50px', paddingRight: '15px', color: 'green' }}>Total</Typography>
                <Typography sx={{ fontSize: '50px', color: 'red', display: 'block', marginLeft: 'auto' }}>
                  {formatNumber(
                    cartItems.reduce((total, cartItems) => {
                      const item = Cart.find(i => i.id === cartItems.id)
                      return total + (item?.price || 0) * cartItems.quantity
                    }, 0))}
                </Typography>
              </Box> : ''
            }
          </DialogContent>
        {cartQuantity > 0 ?
          <DialogActions>
            <Button onClick={closeCart} autoFocus>
              BUY
            </Button>
            <Button onClick={closeCart}>Cancle</Button>
          </DialogActions>
          : ''}
      </Dialog>

    </Box>
  )
}

export default ShoppingCart