import type Movie from '@/types/Movie'
import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movie', {
  state: () => ({
    userMovies: [] as Movie[],
    searchTerm: '',
  }),
  actions: {
    setUserMovies(movies: Movie[]) {
      this.userMovies = movies
    },
  },
})