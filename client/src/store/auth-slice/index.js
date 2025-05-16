import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    isAuthenticated : false,
    isLoading : false,
    user : null
}

//async thunk

export const registerUserAction = createAsyncThunk(
    "/auth/register",

    async (FormData) => {
        const response = await axios.post(
            "http://localhost:3000/api/auth/register",
            FormData,
            {
                withCredentials: true,
            }
        );

        return response.data;
    }
)

export const loginUserAction = createAsyncThunk(
    "/auth/login",

    async (FormData) => {
        const response = await axios.post(
            "http://localhost:3000/api/auth/login",
            FormData,
            {
                withCredentials: true,
            }
        );

        return response.data;
    }
)


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {
        setUser:() => {

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUserAction.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerUserAction.fulfilled, (state) => {
                state.isLoading = false,
                state.user = null,
                state.isAuthenticated = false
            })
            .addCase(registerUserAction.rejected, (state) => {
                state.isLoading = false,
                state.user = null,
                state.isAuthenticated = false
            })
            .addCase(loginUserAction.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginUserAction.fulfilled, (state, action) => {
                state.isLoading = false,
                state.user = action.payload.success ? action.payload.user : null,
                state.isAuthenticated = action.payload.success
            })
            .addCase(loginUserAction.rejected, (state) => {
                state.isLoading = false,
                state.user = null,
                state.isAuthenticated = false
            })
    }
})


export const {setUser} = authSlice.actions;

export default authSlice.reducer