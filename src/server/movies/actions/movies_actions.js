import { ADD_MOVIE, FETCH_MOVIES_FAILED, FETCH_MOVIES_STARTED, FETCH_MOVIES_SUCCEEDED, TOGGLE_MOVIE } from '../constants'


export const addMovie = (id, text) => ({
  type: ADD_MOVIE,
  text,
  id
})

export const fetchMoviesStarted = () => ({
     type: FETCH_MOVIES_STARTED
   })

   
export const fetchMoviesSucceeded = MOVIES => ({
     type: FETCH_MOVIES_SUCCEEDED,
     MOVIES
   })

   
export const fetchMoviesFailed = error => ({
     type: FETCH_MOVIES_FAILED,
     error
   })
   
export const toggleMovie = id => ({
  type: TOGGLE_MOVIE,
  id
})

export const fetchMovies = () => {
     return async dispatch => {
       dispatch(fetchMoviesStarted())
   
       try {
         // Axios is common, but also `fetch`, or your own "API service" layer
         const res = await axios.get('/movies')
         dispatch(fetchMoviesSucceeded(res.data))
       } catch (err) {
         dispatch(fetchMoviesFailed(err))
       }
     }
   }