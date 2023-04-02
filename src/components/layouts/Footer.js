import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import './Footer.css'
const Footer = () => {
    return (
        <>
            <Box className="footer-bg">
                <Container maxWidth="lg">
                    <Box className="control-footer">
                        <Grid container spacing={2}>
                            <Grid item md={4} sm={4} xs={12}>
                                <img src='https://icms-image.slatic.net/images/ims-web/888209b8-a1b1-4d44-8497-0e22c88dfed2.jpg' width="100%" />
                            </Grid>
                            <Grid item md={4} sm={4} xs={12}>
                                <img src=' https://icms-image.slatic.net/images/ims-web/7dc7c8e2-aa43-4323-b58f-2ad06a280c28.jpg' width="100%" />
                            </Grid>
                            <Grid item md={4} sm={4} xs={12}>
                                <img src=' https://icms-image.slatic.net/images/ims-web/b9a0ba83-ca36-4ecc-95eb-412463c149bb.jpg' width="100%" />
                            </Grid>
                            <Grid item md={3} sm={3} xs={6}>
                                <Typography sx={{ fontSize: '20px', paddingBottom: '10px' }}>Customer Care</Typography>
                                <Box className="footer-item">
                                    <Typography variant='h5'>Help Center</Typography>
                                    <Typography variant='h5'>How to Buy</Typography>
                                    <Typography variant='h5'>Shipping & Delivery</Typography>
                                    <Typography variant='h5'>International Product Policy</Typography>
                                    <Typography variant='h5'>How to Return</Typography>
                                    <Typography variant='h5'>Contact Us</Typography>
                                </Box>
                            </Grid>
                            <Grid item md={3} sm={3} xs={6}>
                                <Typography sx={{ fontSize: '20px', paddingBottom: '10px' }}>Lazada</Typography>
                                <Box className="footer-item">
                                    <Typography variant='h5'>All Categories</Typography>
                                    <Typography variant='h5'>About Lazada</Typography>
                                    <Typography variant='h5'>Afﬁliate Program</Typography>
                                    <Typography variant='h5'>Careers</Typography>
                                    <Typography variant='h5'>Terms & Conditions</Typography>
                                    <Typography variant='h5'>Privacy Policy</Typography>
                                    <Typography variant='h5'>Press & Media</Typography>
                                    <Typography variant='h5'>Security</Typography>
                                    <Typography variant='h5'>Popular Products</Typography>
                                    <Typography variant='h5'>Intellectual Property Protection</Typography>
                                </Box>
                            </Grid>
                            <Grid item md={3} sm={3} xs={12}>
                                <Box className="icon-footer">
                                    <img src=' https://lzd-img-global.slatic.net/g/tps/tfs/TB1iTziekWE3KVjSZSyXXXocXXa-42-42.png' width="15%" />
                                    <Box className="text-footer">
                                        <Typography variant='h4' >Go where your heart beats</Typography>
                                        <Typography variant='h5'>Download the App</Typography>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={3} sm={3} xs={12}>
                                <img src="https://freepngimg.com/thumb/android/58666-play-google-button-now-app-store.png" width="48%" />
                                <img src="https://static-00.iconduck.com/assets.00/app-huawei-uk-icon-512x153-qosx82ey.png" width="50%" style={{ paddingLeft: '5px' }} />
                                <img src="https://static-00.iconduck.com/assets.00/app-huawei-uk-icon-512x153-qosx82ey.png" style={{ paddingTop: '5px' }} width="50%" />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Box className="payment">
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item md={6} sm={3} xs={6}>
                            <Typography>Payment methods</Typography>
                            <Box className="payment-method">
                                <Box className="payment-icon">
                                    <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png" width="80%" />
                                </Box>
                                <Box className="payment-icon">
                                    <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png" width="80%" />
                                </Box>
                                <Box className="payment-icon">
                                    <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png" width="80%" />
                                </Box>
                                <Box className="payment-icon">
                                    <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png" width="80%" />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item md={3} sm={3} xs={6}>
                            <Typography>Delivery Services</Typography>
                            <Box className="delivery-services">
                                <Box className="deliver-icon">
                                    <Box className="item-icon">
                                        <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png" />
                                    </Box>
                                    <Box className="item-icon">
                                        <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png"  />
                                    </Box>
                                    <Box className="item-icon">
                                        <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png" />
                                    </Box>
                                    <Box className="item-icon">
                                        <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png" />
                                    </Box>
                                    <Box className="item-icon">
                                        <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png"  />
                                    </Box>
                                    <Box className="item-icon">
                                        <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png" />
                                    </Box>

                                </Box>

                            </Box>
                        </Grid>
                        <Grid item md={3} sm={3} xs={6}>
                            <Typography>Verified by</Typography>
                            <Box className="delivery-services">
                                <Box className="deliver-icon">
                                    <Box className="item-icon">
                                        <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png" />
                                    </Box>
                                    <Box className="item-icon">
                                        <img src="https://support.sitegiant.com/wp-content/uploads/2022/08/cash-on-delivery-banner.png"  />
                                    </Box>
                                </Box>

                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Footer