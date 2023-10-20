import { configureStore } from '@reduxjs/toolkit'
import filmsSlice from './filmsSlice/filmsSlice'
import formSlice from './formSlice/formSlice'
// ...

export const store = configureStore({
  reducer: {
    films: filmsSlice,
    form: formSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {films: filmState}
export type AppDispatch = typeof store.dispatch