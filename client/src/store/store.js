import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice/auth-slice.store.index'
import AdminProductSlice from './admin/product-slice/product-slice.admin.store.index'


const store = configureStore({
    reducer: {
        auth : authReducer,
        adminProducts : AdminProductSlice,
    },
});

export default store;