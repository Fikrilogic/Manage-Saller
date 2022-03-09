import { Dispatch } from "@reduxjs/toolkit";
import { Product } from "../../models/product";
import { productSlice } from "../slice/product-slice";

const { addData, deleteData, resetProducts} = productSlice.actions;

export const addedDataToProducts = (product: Product) => (dispatch: Dispatch) => {
    dispatch(addData(product))
}
export const deleteDataFromProducts = (index: number) => (dispatch: Dispatch) => {
    dispatch(deleteData(index))
}

export const resetProductsAfterSubmit = () => (dispatch: Dispatch) => {
    dispatch(resetProducts())
}