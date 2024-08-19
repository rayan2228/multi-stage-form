import { configureStore } from '@reduxjs/toolkit'
import stepCounterSlice from '../features/stepCounter/stepCounterSlice'
import productDataSlice from '../features/productsData/productDataSlice'

export const store = configureStore({
    reducer: {
        stepCounter: stepCounterSlice,
        products: productDataSlice
    },
})