import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import './Footer.css'
import Payment from './Section2'
import FooterText from './Section3'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
const Footer = () => {
    return (
        <>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </>
    )
}

export default Footer