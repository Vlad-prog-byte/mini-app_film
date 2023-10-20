import { Box, Container, Typography } from '@mui/material';
import React from 'react'


const Footer = () => {
  return (
    <Box
      sx={{ padding: "20px", backgroundColor: "darkgray", mt: "40px"}}
    >
      <Container maxWidth="lg">
        <Typography 
          variant='caption'
          sx={{
            fontSize: "14px"
          }}
        >
          Developed by 
          <a
              href="https://github.com/Vlad-prog-byte"
              target="_blank"
              rel="noreferrer"
          >
              Mickevich
          </a>
        </Typography>
      </Container>
    </Box>
    
  )
}


export default Footer;