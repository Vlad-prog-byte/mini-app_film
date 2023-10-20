import React, { ChangeEvent, FC, useState } from 'react'
import TextField from "@mui/material/TextField";

import { useAppSelector } from '../../store/hooks/hooks';
import { IFilm } from '../../utils/data';
import { Box, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const Search: FC = () => {
    const films = useAppSelector((state) => state.films.films);
    const [searchTerm, setSearchTerm] = useState<string>("");
    const navigate = useNavigate();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    };

    const handleClick = (event: React.MouseEvent<SVGElement>) => {
        const input: Element |  null | undefined = event.currentTarget.parentElement?.previousElementSibling;
        const text: string = String(input?.attributes.getNamedItem("value")?.textContent);
        const result: IFilm[] = films.filter(film => film.name.toLowerCase() === text.toLowerCase());
        if (result.length === 0)
            return;
        navigate(`film/${result[0].id}`)
    }


    return (
        <Box
            sx={{
                backgroundColor: "inherit",
                display: "flex",
                alignItems: "center",
                gap: 1
            }}
        >
            <TextField
                id="search"
                type="search"
                label="Поиск..."
                value={searchTerm}
                onChange={handleChange}
                sx={{ width: "inherit", backgroundColor: "white"}}
                InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                    <SearchIcon className='search-icon'onClick={handleClick}/>
                    </InputAdornment>
                ),
            }}
        />
        </Box>
      );
    }


export default Search;