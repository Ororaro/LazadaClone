import { Box, Container } from '@mui/system'
import React, { useState } from 'react'
import imgHeader1 from '../../images/hero/hero-1.jpg'
import imgHeader2 from '../../images/hero/hero-2.jpg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './Section1.css'
import { Button, Typography } from '@mui/material';
const Section1 = () => {
    const [current, setCurrent] = useState(0);
    const PrevImg = () => {
        current === 0 ? setCurrent(1) : setCurrent(current - 1)
    }
    const NextImg = () => {
        current === 1 ? setCurrent(0) : setCurrent(current + 1)
    }
    return (
        <Box className="ImageSlider">
            <img src={current === 0 ? imgHeader1 : imgHeader2} />
            <ArrowBackIcon className='leftArrow' onClick={PrevImg} />
            <ArrowForwardIcon className='rightArrow' onClick={NextImg} />
            <Box className="control-text">
                <Typography variant='h3'>SUMMER COLLECTION</Typography>
                <Typography variant='h4'>Fall - Winter</Typography>
                <Typography variant='h5'>Collections 2030</Typography>
                <Typography variant='body1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </Typography>
                <Button  variant="contained"  sx={{marginTop:'1rem',color:'#fff',padding:'15px',letterSpacing:'3px'}}>SHOP NOW</Button>
            </Box>
        </Box>
    )
}

export default Section1