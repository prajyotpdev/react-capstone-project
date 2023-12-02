import { configureStore } from '@reduxjs/toolkit'

import moviesReducer from '../reducers/movies_reducers'
import usersReducer from '../reducers/movies_reducers'

// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
  // Automatically calls `combineReducers`
  reducer: {
    movies: moviesReducer
  }
})