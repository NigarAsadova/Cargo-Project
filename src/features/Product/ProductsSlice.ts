import { createSlice } from "@reduxjs/toolkit";
import { ProductsState } from "../../models/Products";
import { getProducts } from "./ProductsApi";
const initialState : ProductsState = {
    isLoading : false,
    error : null,
    products : []
}

export const ProductsSlice = createSlice({
    name : "products",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder 
            .addCase(getProducts.pending, (state) =>{
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message ? action.error.message : "An unknown error occurred";
            })
    }
})

export default ProductsSlice.reducer;