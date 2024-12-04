import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./CategoriesApi";
import { CategoryState } from "../../models/Products";
const initialState : CategoryState = {
    isLoading : false,
    error : null,
    categories : []
}

export const CategoriesSlice = createSlice({
    name : "categories",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder 
            .addCase(getCategories.pending, (state) =>{
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.isLoading = false;
                state.categories = action.payload;
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message ? action.error.message : "An unknown error occurred";
            })
    }
})

export default CategoriesSlice.reducer;