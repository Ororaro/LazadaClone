import React from 'react'
import { useShoppingCart } from '../../../management/context'
import cart from '../../mock/Cart'
import { Box, Button, Grid, Typography } from '@mui/material'
import './CartItem.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
const CartItem = ({ id, quantity, openCart }) => {
  const { removeFromCart, cartQuantity } = useShoppingCart()
  const item = cart.find(i => i.id === id)
  if (item == null) return null
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  let total = item.price * quantity
  return (
    <Box className="BoxCart" sx={{ padding: '10px', borderBottom: '1px solid gray' }}>
      <Grid container spacing={1}>
        <Grid item md={4} sm={4} xs={12}>
          <img src={item.image} />
          <Typography variant='h5' sx={{ fontWeight: '700' }}>x{quantity}</Typography>
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <Typography variant='h4'>{item.description}</Typography>
        </Grid>
        <Grid item md={4} sm={4} xs={12}  container alignItems="center" justifyContent="space-between">
            <Typography variant='h5'>฿ {formatNumber(total)}</Typography>
            <CloseIcon sx={{ cursor: 'pointer', color: 'red' }} onClick={() => removeFromCart(id)} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default CartItem