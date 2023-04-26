import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
const Section2 = () => {
    return (
        <Box className="payment">
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item md={4} sm={4} xs={12}>
                        <Typography>Payment methods</Typography>
                        <Box className="delivery-services">
                            <Box className="deliver-icon">
                                <Box className="item-icon">
                                    <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png" />
                                </Box>
                                <Box className="item-icon">
                                    <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png" />
                                </Box>
                                <Box className="item-icon">
                                    <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png" />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={4} xs={12}>
                        <Typography>Delivery Services</Typography>
                        <Box className="delivery-services">
                            <Box className="deliver-icon">
                                <Box className="item-icon">
                                    <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png" />
                                </Box>
                                <Box className="item-icon">
                                    <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png" />
                                </Box>
                                <Box className="item-icon">
                                    <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png" />
                                </Box>
                                <Box className="item-icon">
                                    <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png" />
                                </Box>
                                <Box className="item-icon">
                                    <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png" />
                                </Box>
                                <Box className="item-icon">
                                    <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png" />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={4} sm={4} xs={12}>
                        <Typography>Verified by</Typography>
                        <Box className="delivery-services">
                            <Box className="deliver-icon">
                                <Box className="item-icon">
                                    <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png" />
                                </Box>
                                <Box className="item-icon">
                                    <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png" />
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    </Grid>
            </Container>
        </Box>
    )
}

export default Section2