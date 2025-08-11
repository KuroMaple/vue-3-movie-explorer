<template>
  <v-container>
    <h1>My Movies</h1>
    <LoadingCircle v-if="loading"/>
    <MovieGrid v-else :movies="userMovies" />
  </v-container>
</template>

<script setup lang="ts">
import LoadingCircle from '@/components/LoadingCircle.vue'
import MovieGrid from '@/components/MovieGrid.vue'
import { movies as mockMovies } from '@/mocks/movies'
import { useMovieStore } from '@/stores/movieStore'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'

const movieStore = useMovieStore()
const { userMovies } = storeToRefs(movieStore)
const loading = ref(true)

// Simulated loading to handle api latency in future
onMounted(() => { 
  setTimeout(() => {
    movieStore.setUserMovies(mockMovies)
    loading.value = false
  }, 3000)
})
</script>


