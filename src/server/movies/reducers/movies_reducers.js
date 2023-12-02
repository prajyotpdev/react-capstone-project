import { ADD_MOVIE, TOGGLE_MOVIE } from '../constants'

const initialMovies = []

export default function moviesReducer(state =1, initialMovies, action) {
  switch (action.type) {
    case ADD_MOVIE: {
      return state.concat({
        id: action.id,
        text: action.text,
        completed: false
      })
    }
    case TOGGLE_MOVIE: {
      return state.map(movie => {
        if (movie.id !== action.id) {
          return movie
        }

        return {
          ...movie,
           completed: !movie.completed
        }
      })
    }
    default:
      return state
  }
} 