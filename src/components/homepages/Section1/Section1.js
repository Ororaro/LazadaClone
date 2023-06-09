import { Box, Container } from '@mui/system'
import React, { useRef, useState, useEffect } from 'react'
import './Section1.css'
import { Button, Typography } from '@mui/material';
import dataSlider from '../../mock/dataSlider';

const Section1 = () => {
  const [slide, setSlide] = useState(0)
  const [bg, setBg] = useState()
  const movedot = index => {
    setSlide(index)
  }
  useEffect(() => {
    if (slide === 0) {
      setBg('rgb(119, 181, 255)')
    }
    else if (slide === 1) {
      setBg('rgb(254, 6, 90)')
    }
  })
  return (
    <Box className="control" sx={{ marginBottom: { md: '0', sm: '0', xs: '2rem' } }}>
      {dataSlider.map((data, index) => {
        return (
          <Box className="slice" key={index}>
            {index === slide && (
              <Box>
                <Box sx={{ backgroundColor: { md: bg, sm: bg, xs: 'none' } }}>
                  <Container maxWidth="lg">
                    <img src={data.image} />
                  </Container>
                </Box>
              </Box>
            )}
          </Box>
        )
      })}
      <Box className="container-dot">
        {Array.from({ length: 3 }).map((item, index) => (
          <Box className={slide === index ? "dot active" : "dot"}
            onClick={() => movedot(index)}
          ></Box>
        ))}
      </Box>
    </Box>
  )
}

export default Section1
