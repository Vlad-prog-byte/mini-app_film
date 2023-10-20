import { Box, Container, Slider, Typography } from '@mui/material';
import React, { FC } from 'react'

import { useAppSelector } from '../../store/hooks/hooks';
import FilmCard from '../FilmCard/FilmCard';

const customMarks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
];

const Main: FC = () => {
  const films = useAppSelector( (state) => state.films.films);
  
  function valuetext(value: number) {
    return `${value}`;
  }

  const [value, setValue] = React.useState<number[]>([0, 5]);
  console.log(value);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };

  

  return (
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              margin: "50px 0"
            }}
          >
            <Typography gutterBottom variant="h5" >Фильтрация по рейтингу фильма</Typography>
            <Box sx={{ m: 3 }} />
            <Slider
                    sx={{
                      width: 300,
                    }}
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="on"
                    marks={customMarks}
                    getAriaValueText={valuetext}
                    min={0}
                    max={5}
                    aria-label="Фильтрация по рейтингу фильма"
              />
          </Box>
          <Box 
              sx={{ 
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: "center",
                gap: 15
              }}
          >
          {films.map( (film) => {
              if (Number(film.rating) >= value[0] && Number(film.rating) <= value[1])
                return (<FilmCard {...film} />)
              else
                return null;
          })}
          </Box>
        </Container>
  )
}


export default Main;