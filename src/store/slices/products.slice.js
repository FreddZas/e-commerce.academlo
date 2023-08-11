import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const producsSlice = createSlice({
    name: "products",
    initialState: null,
    reducers:{
        setProductsG: (state, action) => action.payload
    }
})

export const { setProductsG } = producsSlice.actions

export default producsSlice.reducer

export const getAllProductsThunk = () => dispatch => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'
    axios
    .get(url)
    .then(res => dispatch(setProductsG(res.data))) // el setProductsG es una action, por lo tanto, se despacha
    .catch(err => console.log(err))
}

export const getFilteredProductsThunk = (id) => dispatch => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`
    axios
    .get(url)
    .then(res => dispatch(setProductsG(res.data))) // el setProductsG es una action, por lo tanto, se despacha
    .catch(err => console.log(err))
}