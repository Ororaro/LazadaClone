import React, { useState } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import './Section2.css'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useShoppingCart } from '../../../management/context';
const Cartitem = ({ id, image, description, price, oldprice, cheap }) => {
    const [cartAmount, setCartAmount] = useState(false)
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id)
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    return (
        <>
            <Box className="old-product-list">
                <img src={image} width="100%" />
                <Box className="control-text">
                    <Typography variant='h3'>{description}</Typography>
                    <Typography variant='h4'> ฿{formatNumber(price)} </Typography>
                    <Box className="percentage">
                        <Box className="percentage-flex" >
                            <Typography variant='h5'> ฿{formatNumber(oldprice)} </Typography>
                            <Typography variant='h3'>-{cheap}%</Typography>
                        </Box>
                        {cartAmount &&
                            <Box className="control-add-minus">
                                <Box className="icon-add">
                                    <AddIcon onClick={() => increaseCartQuantity(id)} style={{ fontSize: '25px', color: 'green' }} />
                                </Box>
                                <Typography style={{ fontSize: '18px' }}>{quantity}</Typography>
                                <Box className="icon-minus">
                                    <RemoveIcon onClick={() => decreaseCartQuantity(id)} style={{ fontSize: '25px', color: 'red' }} />
                                </Box>
                            </Box>
                        }
                    </Box>
                    <Box className="btn-cart">
                        {cartAmount ?
                            <Button style={{ color: 'black' }} onClick={() => setCartAmount(!cartAmount)}>- REMOVE</Button>
                            :
                            <Button style={{ color: 'green' }} onClick={() => setCartAmount(!cartAmount)}>+ ADD</Button>}
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default Cartitem