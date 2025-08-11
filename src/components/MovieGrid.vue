<template>
  <v-row>
    <v-col
      v-for="movie in movies"
      :key="movie.imdbID"
      cols="12"
      sm="6"
      md="4"
    >
      <MovieCard :movie="movie" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import MovieCard from '@/components/MovieCard.vue'
import type Movie from '@/types/Movie'

defineProps<{ movies: Movie[] }>()
</script>