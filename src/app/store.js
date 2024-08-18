import { configureStore } from '@reduxjs/toolkit'
import stepCounterSlice from '../features/stepCounter/stepCounterSlice'

export const store = configureStore({
    reducer: {
        stepCounter: stepCounterSlice
    },
})