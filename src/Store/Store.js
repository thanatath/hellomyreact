import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './Search.js'
export default configureStore({
  reducer: searchReducer,
})