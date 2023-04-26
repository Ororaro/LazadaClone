import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
const Section4 = () => {
    return (
        <Box>
            <Container maxWidth="lg">
                <Grid container spacing={1}>
                    <Grid item md={6} sm={4} xs={6}>
                        <Box sx={{ padding: '3rem 0' }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: 300, color: '#2a2a2a' }}>Lazada Southeast Asia</Typography>
                            <Box sx={{ paddingTop: "5px" }}>
                                <LanguageIcon sx={{ fontSize: '35px' }}/>
                                <LanguageIcon sx={{ fontSize: '35px' }}/>
                                <LanguageIcon sx={{ fontSize: '35px' }}/>
                                <LanguageIcon sx={{ fontSize: '35px' }}/>
                                <LanguageIcon sx={{ fontSize: '35px' }}/>
                                <LanguageIcon sx={{ fontSize: '35px' }}/>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={4} xs={6}>
                        <Box sx={{ padding: '3rem 0' }}>
                            <Typography sx={{ fontSize: '16px', fontWeight: 300, color: '#2a2a2a' }}>Follow Us</Typography>
                            <Box sx={{ paddingTop: "5px" }}>
                                <InstagramIcon sx={{ fontSize: '35px' }} />
                                <InstagramIcon sx={{ fontSize: '35px' }} />
                                <InstagramIcon sx={{ fontSize: '35px' }} />
                                <InstagramIcon sx={{ fontSize: '35px' }} />
                                <InstagramIcon sx={{ fontSize: '35px' }} />
                                <InstagramIcon sx={{ fontSize: '35px' }} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={2} sm={4} xs={12}>
                        <Box sx={{ padding: '3rem 0' }}>
                            <Typography sx={{ fontSize: '14px', color: '#606060', fontWeight: 200,textAlign:{xs:'center'} }}>© Lazada 2023</Typography>

                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}

export default Section4