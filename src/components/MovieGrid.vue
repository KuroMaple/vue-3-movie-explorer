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
      <v-btn
        :class="buttonType === 'add' ? 'add-button' : 'remove-button'"
        class="mt-2"
        block
        @click="$emit(buttonType, movie)"
      >
        {{ buttonType === 'add' ? 'Add to My Movies' : 'Remove from My Movies' }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import MovieCard from '@/components/MovieCard.vue'
import type Movie from '@/types/Movie'

defineProps<{ movies: Movie[], buttonType: 'add' | 'remove' }>()

</script>
<style scoped>
.add-button {
  background-color: #4caf50;
  color: white;
}

.remove-button {
  background-color: #f44336;
  color: white;
}
</style>