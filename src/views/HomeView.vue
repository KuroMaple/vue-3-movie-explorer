<template>
  <v-container>
    <h1>My Movies</h1>
    <LoadingCircle v-if="loading"/>
    <div v-else-if="userMovies.length === 0">
      No movies found
    </div>
    <MovieGrid v-else :button-type="'remove'" :movies="userMovies" @remove="removeFromMyMovies" />
  </v-container>
</template>

<script setup lang="ts">
import LoadingCircle from '@/components/LoadingCircle.vue'
import MovieGrid from '@/components/MovieGrid.vue'
import { useMovieStore } from '@/stores/movieStore'
import type Movie from '@/types/Movie'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'

const movieStore = useMovieStore()
const { userMovies } = storeToRefs(movieStore)
const loading = ref(true)

onMounted(() => {
  loading.value = false
})

function removeFromMyMovies(movie: Movie) {
  movieStore.removeUserMovie(movie)
}
</script>


