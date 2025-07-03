import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth-slice/auth-slice.store.index'
import AdminProductSlice from './admin/product-slice/product-slice.admin.store.index'
import ShoppingProductSlice from './shop/product-slice/product-slice.shop.index'
import ShoppingCartSlice from './shop/cart-slice/cart-slice.shop.index'
import AddressSlice from './shop/address-slice/address-slice.shop.index'
import ShopOrderSlice from './shop/order-slice/order-slice.shop.index'


const store = configureStore({
    reducer: {
        auth : authReducer,
        adminProducts : AdminProductSlice,
        shopProducts: ShoppingProductSlice,
        shopCart: ShoppingCartSlice,
        shopAddress: AddressSlice,
        shopOrder: ShopOrderSlice
    },
});

export default store;