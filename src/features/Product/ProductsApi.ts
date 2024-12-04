import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../libs/Api";
import axios , {AxiosError} from "axios";
import { Products } from "../../models/Products";

export const getProducts = createAsyncThunk<Products[]>(
    "products/getProducts",
    async() => {
        try{
        const response = await API.get("products");
        return response.data;            
        }catch(error) {
            if(axios.isAxiosError(error)){
                const AxiosError = error as AxiosError;
                console.log(axios.AxiosError);
                throw AxiosError;
            }
        }
}
)

export const getPageProducts = createAsyncThunk<Products[], number>(
    "pageProducts/getPageProducts",
    async (page = 1) => { // Accept `page` as an argument, default to 1 if not provided
        try {
            const response = await API.get(`products?offset=${page}&limit=10`); // Add `page` to the API URL
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error(error);
                throw error;
            }
        }
    }
);