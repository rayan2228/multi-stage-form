import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  step: 0,
}

export const stepCounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  
  },
})

// export const {  } = stepCounterSlice.actions

export default stepCounterSlice.reducer