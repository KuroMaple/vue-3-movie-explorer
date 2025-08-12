import type Movie from '@/types/Movie'
import { useAsync } from '@/util/useAsync'
import { defineStore } from 'pinia'
import MovieService from '../../services/MovieService'
import { el } from 'vuetify/locale'
export const useMovieStore = defineStore('movie', {
  state: () => ({
    userMovies: [] as Movie[],
    searchResults: [] as Movie[],
    selectedMovie: null as Movie | null
  }),
  actions: {
    setUserMovies(movies: Movie[]) {
      this.userMovies = movies
    },
    addUserMovie(movie: Movie) {
      this.userMovies.push(movie)
    },
    removeUserMovie(movie: Movie) {
      this.userMovies = this.userMovies.filter(m => m.imdbID !== movie.imdbID)
    },
    async setSelectedMovie(imdbID: string) {
      const [movie, error] = await useAsync(MovieService.getMovieDetails(imdbID))
      if (error) {
        console.error("Error fetching movie details:", error)
      } else if (movie) {
        this.selectedMovie = movie
      } else {
        console.log("unknown error occurred while fetching movie details for ", imdbID)
      }
    },
    async searchMovies(searchTerm: string) {
      const [results, error] = await useAsync(MovieService.searchForMovies(searchTerm))
      console.log("Search results:", results, "Error:", error)
      if (error) {
        console.error("Error searching for movies:", error)
      }
      if (results) {
        this.searchResults = results ?? []
      }
    },
  },
  getters: {
    getSearchResults: (state) => state.searchResults,
    isMovieInUserMovies: (state) => (imdbID: string) =>{
      return state.userMovies.some(movie => movie.imdbID === imdbID)
    }
  }

})