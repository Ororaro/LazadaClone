import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import Rating from '@mui/material/Rating';
import './Section2.css'
const Olditem = ({ image, description, price, quantity, rate, oldprice, cheap }) => {
    const [value, setValue] = React.useState(5);
    const formatNumber = (num) => {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }
    const discount = () => {
        return formatNumber(parseInt((cheap * -oldprice) / 100 + oldprice))
    }
    return (
        <>
            <Box className="old-list">
                <img src={image} width="100%" />
                <Box className="old-text">
                    <Typography variant='h3'>{description}</Typography>
                    <Typography variant='h4'> ฿{discount()} </Typography>
                    <Box className="percentage" sx={{justifyContent:'flex-start'}}>
                        <Typography variant='h5'> ฿{formatNumber(oldprice)} </Typography>
                        <Typography variant='h3' sx={{fontSize:'14px !important'}}>-{cheap}%</Typography>
                    </Box>
                    <Box className="rate">
                        <Rating name="disabled" value={value} disabled sx={{ fontSize: '14px' }} />
                        <Typography sx={{ fontSize: '12px', color: '#9e9e9e' }}>({rate})</Typography>
                    </Box>
                </Box>
            </Box>

        </>
    )
}

export default Olditem