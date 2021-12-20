import { configureStore } from '@reduxjs/toolkit'
import { createStore } from '@reduxjs/toolkit';
import searchReducer from './Search.js'
export default configureStore({
  reducer: searchReducer,
})

const store = createStore(
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
