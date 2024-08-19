import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: []
}

export const productDataSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addProduct: (state, { payload }) => {
            state.products.push(payload)
        },
        stepBackward: (state) => {
            if (state.step) {
                state.step -= 1
            }
        }
    },
})

export const { addProduct, stepBackward ,} = productDataSlice.actions

export default productDataSlice.reducer