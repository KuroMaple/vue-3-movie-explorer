<template>
  <v-container >
    <h1>Search Results for: ENTER SEARCH TERM HERE</h1>
    <MovieGrid :movies="mockMovies"/>
  </v-container>
</template>

<script setup lang="ts">
import MovieGrid from '@/components/MovieGrid.vue'
import { movies } from '@/mocks/movies'
const mockMovies = movies
</script>

