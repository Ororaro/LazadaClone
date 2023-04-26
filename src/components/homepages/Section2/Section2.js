import { Box, Button, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState, useEffect } from 'react'
import './Section2.css'
import { brandProduct, categories, ShowProduct } from '../../mock/dataProduct'
import ShopitemCard from './ShopitemCard'
import ShowitemCard from './ShowitemCard'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import cart from '../../mock/Cart'
export const Section2 = () => {

  return (
    <Box className="control-bg">
      <Container maxWidth="lg" >
        <Grid container spacing={2}>
          <Grid item md={2.4} sm={2.4} xs={6}>
            <Box className="btn-menu-item">
              <Button><img src="https://icms-image.slatic.net/images/ims-web/9d78cd14-05ee-43ba-a360-61f895a70aef.png" width="30px" />LazMail</Button>
            </Box>
          </Grid>
          <Grid item md={2.4} sm={2.4} xs={6}>
            <Box className="btn-menu-item">
              <Button ><img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB12wVshUT1gK0jSZFhXXaAtVXa.png" width="30px" />Vouchers</Button>
            </Box>
          </Grid>
          <Grid item md={2.4} sm={2.4} xs={6}>
            <Box className="btn-menu-item">
              <Button><img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB11DFthO_1gK0jSZFqXXcpaXXa.png" width="30px" />Top-Up,Bills&Food</Button>
            </Box>
          </Grid>
          <Grid item md={2.4} sm={2.4} xs={6}>
            <Box className="btn-menu-item">
              <Button><img src="https://icms-image.slatic.net/images/ims-web/a13d12e1-91d1-4240-b22f-46233a012e89.png" width="30px" />LazBlog</Button>
            </Box>
          </Grid>
          <Grid item md={2.4} sm={2.4} xs={6}>
            <Box className="btn-menu-item">
              <Button><img src="https://img.alicdn.com/imgextra/i1/O1CN01yvjCS71LsB10MJoJt_!!6000000001354-2-tps-150-150.png" width="30px" />LazPick</Button>
            </Box>
          </Grid>
        </Grid>
        <Typography variant='h5'>Flash Sale</Typography>
        <Box className="prd-flash-Sale-text">
          <Typography style={{ color: '#f57224' }}>On Sale Now</Typography>
          <Button style={{ color: '#f57224', border: '1px solid' }}>SHOP ALL PRODUCTS</Button>
        </Box>
        <Box className="prd-detail">
          {cart.map((data, index) => {
            return <ShopitemCard key={data.id}{...data} />
          })}
        </Box>
        <Box className="brand-Product">
          <Box className="menu-Product">
            <Typography variant='h5' sx={{ marginTop: '22px', fontSize: '22px' }}>LazMail</Typography>
            <Box className="icon">
              <Typography variant='h4'>Shop More </Typography><ArrowForwardIosIcon style={{ color: '#1a9cb7', fontSize: '20px' }} />
            </Box>
          </Box>
          <Box className="banner-detail">
            {brandProduct.map((data, index) => {
              return (
                <Box className="brand-banner">
                  <Box className="box-img">
                    <img src={data.image} width="100%" />
                  </Box>
                  <Box className="bannerlogo">
                    <img src={data.logo} width="25%" />
                  </Box>
                  <Box className="textlogo">
                    <Typography>{data.title}</Typography>
                    <Typography variant='h5'>{data.title}</Typography>
                  </Box>
                </Box>
              )
            })}
          </Box>
          <Typography variant='h5' sx={{ marginTop: '22px', fontSize: '22px' }}>Categories</Typography>
          <Box className="category-detail">
            {categories.map((data, index) => {
              return (
                <Box className="category-banner">
                  <Box className="card-category">
                    <img src={data.image} width="80px" />
                    <Box className="category-text">
                      <Typography variant='h5'>{data.title}</Typography>
                    </Box>
                  </Box>
                </Box>
              )
            })}
          </Box>
          <Typography variant='h5' sx={{ marginTop: '22px', fontSize: '22px' }}>Just For You</Typography>
          <Box className="old-detail">
            {ShowProduct.map((data, index) => {
              return <ShowitemCard {...data} />
            })}
          </Box>
          <Box className="btn-load">
            <Button>LOAD MORE</Button>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
