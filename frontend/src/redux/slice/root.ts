import { combineReducers } from "@reduxjs/toolkit";
import { sellerSlice } from "./seller-slice";
import { productSlice } from "./product-slice";

const reducers = combineReducers({
    seller: sellerSlice.reducer,
    product: productSlice.reducer
})


export default reducers