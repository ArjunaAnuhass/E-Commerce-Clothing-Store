import axios from "axios"

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"



const initialState = {
    isLoading: false,
    addressList: []
}

export const addNewAddress = createAsyncThunk(
    '/address/addNewAddress',

    async (formData) => {
        const response = await axios.post('http://localhost:3000/api/shop/address/add', formData);

        return response.data;
    }
)

export const fetchAllAddresses = createAsyncThunk(
    '/address/fetchAllAddresses',

    async (userId) => {
        const response = await axios.get(`http://localhost:3000/api/shop/address/get/${userId}`);

        return response.data
    }
)

export const updateAddress = createAsyncThunk(
    '/address/updateAddress',

    async ({userId, addressId, formData}) => {
        const response = await axios.put(`http://localhost:3000/api/shop/address/update/${userId}/${addressId}`, formData);

        return response.data;
    }
)

export const deleteAddress = createAsyncThunk(
    '/address/deleteAddress',

    async ({userId, addressId}) => {
        const response = await axios.delete(`http://localhost:3000/api/shop/address/delete/${userId}/${addressId}`);

        return response.data;
    }
)

const AddressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addNewAddress.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addNewAddress.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(addNewAddress.rejected, (state) => {
                state.isLoading = false
            })
            .addCase(fetchAllAddresses.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchAllAddresses.fulfilled, (state, action) => {
                state.isLoading = false
                state.addressList = action.payload.data
            })
            .addCase(fetchAllAddresses.rejected, (state) => {
                state.isLoading = false
            })
    }
});

export default AddressSlice.reducer