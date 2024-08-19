import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  stepsName: ["Product Details", "Inventory Details", "Add Photo", "Review"],
  step: 0,
}

export const stepCounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    stepForward: (state) => {
      if (state.step < state.stepsName.length) {
        state.step += 1
      }
    },
    stepBackward: (state) => {
      if (state.step) {
        state.step -= 1
      }
    }
  },
})

export const { stepForward,stepBackward } = stepCounterSlice.actions

export default stepCounterSlice.reducer