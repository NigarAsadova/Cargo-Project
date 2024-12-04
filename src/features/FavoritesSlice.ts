import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favItems :{} as {[key:number]:boolean},
};

const FavoritesSlice = createSlice({
    name : 'favorites',
    initialState,
    reducers: {
        toggleFavorites : (state, action) => {
            const id = action.payload;
            if(state.favItems[id]){
                delete state.favItems[id];
            }
            else {
                state.favItems[id] = true;
            }
        }
    }
})

export const {toggleFavorites} = FavoritesSlice.actions;
export default FavoritesSlice.reducer;
