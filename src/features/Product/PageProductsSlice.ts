import { createSlice } from "@reduxjs/toolkit";
import { ProductsState } from "../../models/Products";
import { getPageProducts } from "./ProductsApi";
const initialState : ProductsState = {
    isLoading : false,
    error : null,
    products : []
}

export const PageProductsSlice = createSlice({
    name : "pageProducts",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder 
            .addCase(getPageProducts.pending, (state) =>{
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getPageProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(getPageProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message ? action.error.message : "An unknown error occurred";
            })
    }
})

export default PageProductsSlice.reducer;