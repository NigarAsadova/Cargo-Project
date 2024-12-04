import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basketItems : {} as {[key:number]:boolean},
}

const BasketsSlice = createSlice({
    name : 'baskets',
    initialState,
    reducers:{
        toggleBaskets : (state, action) =>{
            const id = action.payload;
            if(state.basketItems[id]){
                delete state.basketItems[id];
            }
            else state.basketItems[id] = true;
        }
    }
})

export const {toggleBaskets} = BasketsSlice.actions;
export default BasketsSlice.reducer;