<template>
  <v-row>
    <v-col
      v-for="movie in movies"
      :key="movie.imdbID"
      cols="12"
      sm="6"
      md="4"
    >
      <MovieCard :movie="movie" @select="goToMovie"/>
      <v-btn
        v-if="buttonType === 'add' && !isAdded(movie)"
        class="button add-button"
        block
        @click="$emit('add', movie)"
      >
        Add to My Movies
      </v-btn>
      <v-btn
        v-else-if="buttonType === 'add' && isAdded(movie)"
        class="button added-button"
        block
        disabled
      >
        Added to My Movies
      </v-btn>
      <v-btn
        v-else
        class="button remove-button"
        block
        @click="$emit('remove', movie)"
        >
        Remove from My Movies
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import MovieCard from '@/components/MovieCard.vue'
import { useMovieStore } from '@/stores/movieStore'
import type Movie from '@/types/Movie'
import { useRouter } from 'vue-router'

defineProps<{ movies: Movie[], buttonType: 'add' | 'remove' }>()

const router = useRouter()
const movieStore = useMovieStore()


const isAdded = (movie: Movie) => movieStore.isMovieInUserMovies(movie.imdbID)

function goToMovie(movie: Movie) {
  router.push({ name: 'MovieView', params: { imdbID: movie.imdbID } })
}
</script>
<style scoped>
.button {
  color: white;
  margin-top: 0.5rem;
}
.add-button {
  background-color: #4caf50;
}

.remove-button {
  background-color: #f44336;
}

.added-button {
  background-color: #1976d2;
}
</style>