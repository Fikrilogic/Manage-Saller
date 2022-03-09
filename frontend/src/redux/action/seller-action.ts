import { Dispatch } from "@reduxjs/toolkit";
import { sellerSlice } from "../slice/seller-slice";
import axios from "axios";
import { Seller } from "../../models/seller";
import { Product } from "../../models/product";

const { getAllSeller, getSellerById, createSeller, createProductOnSeller, updateSeller, deleteSellerById, deleteProductByIdSeller, failedRequest, sendRequest } = sellerSlice.actions

export const fetchAllSeller = () => async (dispatch: Dispatch) => {
    dispatch(sendRequest())

    try {
        const sellers = await axios.get(`${process.env.REACT_APP_API_URL}/seller`)
        dispatch(getAllSeller(sellers.data))
    } catch (e: any) {
        dispatch(failedRequest())
    }
}

export const fetchSellerById = (id: string | undefined) => async (dispatch: Dispatch) => {
    dispatch(sendRequest())

    try {
        const seller = await axios.get(`${process.env.REACT_APP_API_URL}/seller/${id}`)
        dispatch(getSellerById(seller.data))
    } catch {
        dispatch(failedRequest())
    }
}

export const addSeller = (seller: { name: string, address: string, product: any }) => async (dispatch: Dispatch) => {
    dispatch(sendRequest())

    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/seller`, { name: seller.name, address: seller.address, product: seller.product })
        dispatch(createSeller())
    } catch {
        dispatch(failedRequest())
    }
}

export const addProductToSeller = (id: string | any, product: Product) => async (dispatch: Dispatch) => {

    const { name, price, stock } = product;
    dispatch(sendRequest())

    try {
        await axios.post(`${process.env.REACT_APP_API_URL}/seller/${id}`, { name, price, stock })

        dispatch(createProductOnSeller())
    } catch {
        dispatch(failedRequest())
    }

}

export const deleteSeller = (id: string) => async (dispatch: Dispatch) => {
    dispatch(sendRequest())
    try {
        await axios.delete(`${process.env.REACT_APP_API_URL}/seller/${id}`)
        dispatch(deleteSellerById())
    } catch {
        dispatch(failedRequest())
    }
}

export const deleteProductOnSeller = (sellerId: string | undefined, productId: any, name: string | any) => async (dispatch: Dispatch) => {
    dispatch(sendRequest())
    try {
        await axios.delete(`${process.env.REACT_APP_API_URL}/seller/${sellerId}/${productId}?name=${name}`)

        console.log("execution")
        dispatch(deleteProductByIdSeller())
    } catch {
        dispatch(failedRequest())
    }
}

export const updateSellerById = (seller: Seller) => async (dispatch: Dispatch) => {
    dispatch(sendRequest())
    const { name, address, products } = seller
    try {
        const fetch = await axios.patch(`${process.env.REACT_APP_API_URL}/seller/${seller._id}`, { name: name, address, products })
        dispatch(updateSeller(fetch.data))
    } catch {
        dispatch(failedRequest())
    }
}