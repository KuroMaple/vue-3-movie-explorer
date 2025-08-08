import axios from 'axios';
import Movie from '../src/types/Movie'

const API_URL= import.meta.env.VITE_API_URL
const API_KEY= import.meta.env.VITE_API_KEY

const apiClient = axios.create({
  baseURL: API_URL,
  params: {
    apiKey: API_KEY
  }
})

const MovieService = {
  async searchForMovies(searchTerm: string): Promise<Movie[]> {
    try {
      const response = await apiClient.get("/", {
        params: {
          s: searchTerm
        }
      })
      return response.data.Search as Movie[];
    } catch (error) {
      console.error("API error:", error);
      return [] // Swallowing API errors
    }
  }
}