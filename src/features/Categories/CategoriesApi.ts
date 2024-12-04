import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../libs/Api";
import { Category } from "../../models/Products";

export const getCategories = createAsyncThunk<Category[]>(
    "categories/getCategories",
    async() => {
        try{
            const response = await API.get("categories");
            return response.data;
        } catch(error){
            throw error;
        }
    }
)