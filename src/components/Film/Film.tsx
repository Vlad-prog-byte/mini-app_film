import { Box, Container, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useParams } from "react-router-dom";
import { useAppSelector } from '../../store/hooks/hooks';
import { IFilm } from '../../utils/data';
import StarRating from '../StarRating/StarRating';



const Film: FC = () => {
    const { id } = useParams<string>();

    const film: IFilm[]= useAppSelector((state) => state.films.films.filter((film) => film.id === Number(id)));
    return (
        <Container maxWidth="lg">
            <Box 
                id={id}
                sx={{ 
                    textAlign: 'center'
                }}
            >
                <img src={film[0].url} alt="" />
                <Typography 
                    variant="h5" component="div"
                    sx={{
                        paddingTop: "15px"
                    }}
                >
                    {film[0].name} {film[0].year} {film[0].country}
                </Typography>
                <StarRating i={film[0].id}/>
                <Typography 
                    variant="body2" component="div"
                    sx={{
                        paddingTop: "15px",
                        lineHeight: "21px",
                        fontSize: "16px"
                    }}
                >
                    {film[0].title}
                </Typography>

            </Box>
      </Container>

    )
}

export default Film;
