import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Films, IFilm } from "../../utils/data";


interface IFilmState {
    films: IFilm[]
}


interface IRating {
    rating: number,
    id: number
}

const initialState: IFilmState = {
    films: Films
}

export const filmsSlice = createSlice({
    name: "films",
    initialState,
    reducers: {
        addFilm: (state, action: PayloadAction<IFilm>) => {
            state.films.push(action.payload);
        },

        addRating: (state, action: PayloadAction<IRating>) => {
            state.films[action.payload.id].rating = action.payload.rating;
        }
    }
})


export const { addFilm, addRating } = filmsSlice.actions;
export default filmsSlice.reducer;