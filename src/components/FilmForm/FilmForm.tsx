import { Box, Button, FormLabel, Modal, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React, { FC, useState } from 'react'


import { addFilm } from '../../store/filmsSlice/filmsSlice';
import { swapActive } from '../../store/formSlice/formSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { IFilm } from '../../utils/data';


import './FilmForm.css';



const FilmForm: FC = () => {
    const isActive = useAppSelector( (state) => state.form.isActive);
    const length = useAppSelector( (state) => state.films.films.length);
    const dispatch = useAppDispatch(); 

    const [values, setValues] = useState<IFilm>({
        id: length,
        name: "",
        url: "",
        title: "",
        year: 0,
        country: "",
        rating: 0
    })


    const handleClick = (event: React.MouseEvent<HTMLElement | SVGElement>) => {
        dispatch(swapActive({ isActive : !isActive}));
    }   


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(addFilm(values));
        dispatch(swapActive({ isActive: !isActive }))
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues({...values, [name]: value});
    }

  return (
    <section>
        <div className='overlay' onClick={handleClick}/>
        <Modal
            open={isActive}
            onClose={handleClick}
            aria-labelledby="child-modal-title"
            aria-describedby="child-modal-description"
            sx={{
                position: "fixed",
                top: 0,
                right: 0,
                background: "gray",
                width: "50vw",
                height: "100vh",
                zIndex: 99,
                padding: "24px"
            }}
        >
            <Box sx={{width: "100%" }}>
                <form onSubmit={handleSubmit}>
                    <CloseIcon
                        onClick={handleClick}
                        sx={{
                            backgroundColor: "red", 
                            borderRadius: "50%", 
                            position: "relative", 
                            left: "95%"
                        }}
                    />
                    <Box></Box>
                    <FormLabel sx={{color: "white"}}>Название фильма</FormLabel>
                    <Box></Box>
                    <TextField
                        type="text"
                        name="name"
                        autoComplete="off"
                        onChange={handleChange}
                        required
                        sx={{ input: { color: 'white' } }}
                    ></TextField>
                    <Box sx={{ m: 3 }} />

                    <FormLabel sx={{color: "white"}}>Ссылка на постер фильма</FormLabel>
                    <Box></Box>
                    <TextField
                        type="text"
                        name="url"
                        autoComplete="off"
                        onChange={handleChange}
                        required
                        sx={{ input: { color: 'white' } }}
                    ></TextField>
                    <Box sx={{ m: 3 }} />

                    <FormLabel sx={{color: "white"}}>Год фильма</FormLabel>
                    <Box></Box>
                    <TextField
                        type="number"
                        name="year"
                        autoComplete="off"
                        onChange={handleChange}
                        required
                        sx={{ input: { color: 'white' } }}
                    ></TextField>
                    <Box sx={{ m: 3 }} />

                    <FormLabel sx={{color: "white"}}>Описание фильма</FormLabel>
                    <Box></Box>
                    <TextField
                        type="text"
                        name="title"
                        autoComplete="off"
                        onChange={handleChange}
                        required
                        sx={{ input: { color: 'white' } }}
                    ></TextField>
                    <Box sx={{ m: 3 }} />

                    <FormLabel sx={{color: "white"}}>Страна</FormLabel>
                    <Box></Box>
                    <TextField
                        type="text"
                        name="country"
                        autoComplete="off"
                        onChange={handleChange}
                        required
                        sx={{ input: { color: 'white' } }}
                    ></TextField>
                    <Box sx={{ m: 3 }} />
                    <Button type="submit" variant='contained' sx={{color: "white"}}>Создать</Button>

                </form>
            </Box>
        </Modal>


            {/* <div className='film-form'>
                <div className="close" onClick={handleClick}>
                    <img src={`${process.env.PUBLIC_URL}/close.png`} alt="закрыть" className='img-close'/>
                </div>
                <div className='film-form__title'>
                    Добавить фильм
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="form__group">
                        <input 
                            type="text" 
                            name="name"
                            placeholder="название фильма"
                            value={values.name}
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="form__group">
                        <input 
                            type="text" 
                            name="url"
                            placeholder="Ссылка на постер фильма"
                            value={values.url}
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="form__group">
                        <input 
                            type="number" 
                            name="year"
                            placeholder="Год выхода фильма"
                            value={values.year}
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className="form__group">
                        <input 
                            type="text" 
                            name="title"
                            placeholder="Описание к фильму"
                            value={values.title}
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form__group">
                        <input 
                            type="text" 
                            name="country"
                            placeholder="Страна"
                            value={values.country}
                            autoComplete="off"
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="submit">
                        Create an account
                    </button>
                </form>
            </div> */}
    </section>
  )
}


export default FilmForm;