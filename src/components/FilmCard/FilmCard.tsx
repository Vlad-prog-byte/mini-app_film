import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React, { FC } from 'react';
import { useNavigate } from "react-router-dom";



interface IFilmProps {
    id: number,
    name: string,
    url: string
}

const FilmCard: FC<IFilmProps> = ({ id, name, url }) => {
    const navigate = useNavigate();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        let id = event.currentTarget.parentElement?.parentElement?.id;
        navigate(`/film/${id}`);
    };

  return (
    <Card
      id={`${id}`}
      sx={{ 
            maxWidth: 345,
            padding: "20px 50px"
        }}
    >
      <CardMedia
        component="img"
        height="194"
        image={url}
        alt="Постер фильма"
      />

       <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>

      <CardActions>
        <Button 
          size="small"
          variant='contained'
          onClick={handleClick}
        >
          Подробнее
        </Button>
      </CardActions>
    </Card>
  )
}


export default FilmCard;