import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
    isLoading: false,
    productList: [],
}


export const fetchAllFilteredProducts = createAsyncThunk(
    '/products/fetchAllFilteredProducts',

    async () => {
        const result = await axios.get(
            "http://localhost:3000/api/shop/products/get"
        );
        return result?.data;
    }
)

const ShoppingProductSlice = createSlice({
    name: 'shoppingProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllFilteredProducts.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchAllFilteredProducts.fulfilled, (state, action) => {
                state.isLoading = false,
                state.productList = action.payload.data
            })
            .addCase(fetchAllFilteredProducts.rejected, (state) => {
                state.isLoading = false,
                state.productList = []
            })
    }
})

export default ShoppingProductSlice.reducer;