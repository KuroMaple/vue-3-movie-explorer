import type Movie from '@/types/Movie'
import { useAsync } from '@/util/useAsync'
import { defineStore } from 'pinia'
import MovieService from '../../services/MovieService'
import { el } from 'vuetify/locale'
export const useMovieStore = defineStore('movie', {
  state: () => ({
    userMovies: [] as Movie[],
    searchResults: [] as Movie[],
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
    getSearchResults: (state) => state.searchResults
  }

})