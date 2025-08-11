<template>
  <v-card>
    <v-img :src="movie.Poster" height="300px"></v-img>
    <v-card-title>{{ movie.Title }}</v-card-title>
    <v-card-subtitle>{{ movie.Released }}</v-card-subtitle>
    <v-card-text>{{ movie.Plot }}</v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import type Movie from '@/types/Movie'
defineProps<{
  movie: Movie
}>()
</script>

<style scoped>

</style>