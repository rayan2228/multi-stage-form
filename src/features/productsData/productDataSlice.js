import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: []
}

export const productDataSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addProduct: (state, { payload }) => {
            state.products.push({ ...payload, id: state.products.length + 1 })
        },
        deleteProduct: (state, { payload }) => {
            const filteredData = state.products.filter((value) => value.id !== payload)
            state.products = filteredData
        }
    },
})

export const { addProduct, deleteProduct } = productDataSlice.actions

export default productDataSlice.reducer