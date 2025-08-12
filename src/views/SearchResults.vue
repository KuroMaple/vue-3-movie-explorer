<template>
  <v-container >
    <v-btn
      color="secondary"
      class="mb-4"
      @click="goBack"
      prepend-icon="mdi-arrow-left"
    >
      Back to My Movies
    </v-btn>
    <h1>Search Results for: {{ route.params.query }}</h1>
    <LoadingCircle v-if="loading"/>

    <MovieGrid :button-type="'add'" :movies="searchResults" @add="addToMyMovies" />
  </v-container>
</template>

<script setup lang="ts">
import LoadingCircle from '@/components/LoadingCircle.vue'
import MovieGrid from '@/components/MovieGrid.vue'
import { useMovieStore } from '@/stores/movieStore'
import type Movie from '@/types/Movie'
import { storeToRefs } from 'pinia'
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const movieStore = useMovieStore()
const route = useRoute()
const router = useRouter()
const { searchResults } = storeToRefs(movieStore)
const loading = ref(true)



const fetchResults = async () => {
  loading.value = true
  console.log("Fetching results for:", route.params.query)
  await movieStore.searchMovies(route.params.query as string)
  loading.value = false
}

const goBack = () => {
  router.push({ name: 'home' }) // or use router.back() for browser back
}

function addToMyMovies(movie: Movie) {
  movieStore.addUserMovie(movie)
}

onMounted(fetchResults)
watch(() => route.params.query, fetchResults)
</script>

