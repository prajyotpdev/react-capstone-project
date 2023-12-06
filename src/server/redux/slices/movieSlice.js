import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
     name: 'movies',
     initialState: [],
     reducers: {
       movieAdded(state, action) {
         state.push({
           id: action.payload.id,
           text: action.payload.text,
           completed: false
         })
       },
       movieToggled(state, action) {
         const movie = state.find(movie => movie.id === action.payload)
         movie.completed = !movie.completed
       }
     }
   })
   
   export const { movieAdded, movieToggled } = moviesSlice.actions
   export default moviesSlice.reducer