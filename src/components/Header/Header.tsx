import { AppBar, Box, Button, Container } from '@mui/material';
import React from 'react';


import { swapActive } from '../../store/formSlice/formSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import Search from '../Search/Search';

const Header = () => {
  const isActive = useAppSelector((state) => state.form.isActive);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(swapActive({ isActive : !isActive}))
  };

  return (
    <AppBar 
      position="static"
      sx={{ padding: "20px", backgroundColor: "darkgray", mb: "40px"}}
    >
      <Container maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2
        }}
      >
        <Box>
          <Button 
            size="small"
            variant='contained'
            onClick={handleClick}
          >
            Добавить
          </Button>
        </Box>
        <Search/>
      </Container>
    </AppBar>
  )
}


export default Header;