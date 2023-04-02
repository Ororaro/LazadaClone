import React from 'react'
import { useShoppingCart } from '../../management/context'
import cart from '../mock/Cart'
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
        <Box className="BoxCart" sx={{ padding: '10px' }}>
          <img src={item.image} />
          <Typography variant='h5'>x{quantity}</Typography>
          <Typography variant='h4'>{item.description}</Typography>
          <Box className="manageCancel">
            <Typography variant='h5'>฿{formatNumber(total)}</Typography>
            <Button onClick={() => removeFromCart(id)}><CloseIcon /></Button>
          </Box>
        </Box>
  )
}

export default CartItem