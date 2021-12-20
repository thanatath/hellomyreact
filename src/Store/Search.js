import { createSlice } from '@reduxjs/toolkit'

export const seachAction = createSlice({
  name: 'search',
  initialState: {
    valueSearch: '',
    
  },
  reducers: {
    updateSearch: (state, action) => {
      state.valueSearch = action.payload
      console.log('Search Update: ', action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const {updateSearch } = seachAction.actions

export default seachAction.reducer