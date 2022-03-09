import { Product } from "../../models/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: { products: Product[] } = {
    products: [],
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addData: (state, action: PayloadAction<Product>) => {
            state.products.push(action.payload)
        },
        deleteData: (state, action: PayloadAction<number>) => {
            const newData = state.products.filter((item, index) => index !== action.payload)
            return {
                products: newData
            }
        },
        resetProducts: (state) => {
            return initialState
        },
    }
});

export const productSelector = (state: any) => state.product;