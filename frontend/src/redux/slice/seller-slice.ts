import { Seller } from "../../models/seller";
import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../models/product";

type SellerState = {
    sellers: Seller[], seller: Seller, status: string, isLoading: boolean
}

const initialState: SellerState = {
    sellers: [],
    seller: { _id: "", name: "", address: "", "products": [] },
    status: "",
    isLoading: false,
}

export const sellerSlice = createSlice({
    name: "seller",
    initialState,
    reducers: {
        getAllSeller: (state, action) => {
            return {
                ...state,
                sellers: action.payload,
                isLoading: false,
                status: "GET",
            }
        },
        getSellerById: (state, action) => {
            return {
                ...state,
                seller: action.payload,
                status: 'GET',
                isLoading: false,
            }
        },

        createSeller: (state) => {
            return {
                ...state,
                isLoading: false,
                status: 'POST',
            }
        },
        createProductOnSeller: (state) => {
            return {
                ...state,
                isLoading: false,
                status: 'POST'
            }
        },
        deleteProductByIdSeller: (state) => {
            return {
                ...state,
                isLoading: false,
                status: 'DELETE'
            }
        },
        deleteSellerById: (state) => {
            return {
                ...state,
                isLoading: false,
                status: 'DELETE'
            }
        },
        updateSeller: (state, action) => {
            state.status = 'UPDATE'
            state.seller = action.payload
            state.isLoading = false
        },
        failedRequest: (state) => {
            state.status = 'Failed'
            state.isLoading = false
        },
        sendRequest: (state) => {
            state.isLoading = true
        }
    }
})


export const sellerSelector = (state: any) => state.seller;