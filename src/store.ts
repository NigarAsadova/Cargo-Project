import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import  productsReducer  from "./features/Product/ProductsSlice";
import pageProductsReducer from "./features/Product/PageProductsSlice";
import CategoriesReducer  from "./features/Categories/CategoriesSlice";
import FavoritesReducer from "./features/FavoritesSlice";
import BasketsReducer from "./features/BasketsSlice";
export const store = configureStore({
    reducer : {
        'products' : productsReducer,
        'pageProducts' : pageProductsReducer,
        'categories' : CategoriesReducer,
        'favorites' : FavoritesReducer,
        'baskets' : BasketsReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>; // all states of store's type is rootState
export type AppDispatch = typeof store.dispatch; // dispatch's type is AppDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();