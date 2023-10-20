import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IActive {
    isActive: boolean
}


const initialState: IActive = {
    isActive: false
}

export const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        swapActive: (state, action: PayloadAction<IActive>) => {
            state.isActive = action.payload.isActive;
        }
    }
})


export const { swapActive } = formSlice.actions;

export default formSlice.reducer;