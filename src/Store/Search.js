import { createSlice } from '@reduxjs/toolkit'

export const seachAction = createSlice({
  name: 'search',
  initialState: {
    value: '',
  },
  reducers: {
    update: (state, action) => {
      state.value = action.payload
      console.log('Search Update: ', action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const {update } = seachAction.actions

export default seachAction.reducer