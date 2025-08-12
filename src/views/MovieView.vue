<template>
  <v-container>
    <v-btn
      color="secondary"
      class="mb-4"
      prepend-icon="mdi-arrow-left"
      @click="goBack"
    >
      Back to Search Results
    </v-btn>
    <v-card v-if="selectedMovie">
      <v-row>
        <v-col cols="12" md="4">
          <v-img :src="selectedMovie.Poster" height="400px" />
        </v-col>
        <v-col cols="12" md="8">
          <v-card-title>{{ selectedMovie.Title }} ({{ selectedMovie.Year }})</v-card-title>
          <v-card-subtitle>
            <div><strong>Released:</strong> {{ selectedMovie.Released }}</div>
            <div><strong>Rated:</strong> {{ selectedMovie.Rated }}</div>
            <div><strong>Runtime:</strong> {{ selectedMovie.Runtime }}</div>
            <div><strong>Genre:</strong> {{ selectedMovie.Genre }}</div>
            <div><strong>Type:</strong> {{ selectedMovie.Type }}</div>
          </v-card-subtitle>
          <v-card-text>
            <div class="mb-2"><strong>Plot:</strong> {{ selectedMovie.Plot }}</div>
            <div><strong>Director:</strong> {{ selectedMovie.Director }}</div>
            <div><strong>Writer:</strong> {{ selectedMovie.Writer }}</div>
            <div><strong>Actors:</strong> {{ selectedMovie.Actors }}</div>
            <div><strong>Language:</strong> {{ selectedMovie.Language }}</div>
            <div><strong>Country:</strong> {{ selectedMovie.Country }}</div>
            <div><strong>Awards:</strong> {{ selectedMovie.Awards }}</div>
            <div><strong>Box Office:</strong> {{ selectedMovie.BoxOffice }}</div>
            <div><strong>IMDB Rating:</strong> {{ selectedMovie.imdbRating }}</div>
            <div><strong>IMDB Votes:</strong> {{ selectedMovie.imdbVotes }}</div>
            <div><strong>Metascore:</strong> {{ selectedMovie.Metascore }}</div>
            <div class="mt-2"><strong>Ratings:</strong>
              <ul>
                <li v-for="rating in selectedMovie.Ratings" :key="rating.Source">
                  {{ rating.Source }}: {{ rating.Value }}
                </li>
              </ul>
            </div>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
    <v-alert v-else type="error" text="Movie not found.">
    </v-alert>
  </v-container>
</template>

<script setup lang="ts">
import { useMovieStore } from '@/stores/movieStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const movieStore = useMovieStore()
const { selectedMovie } = storeToRefs(movieStore)
const route = useRoute()
const router = useRouter()

function goBack() {
  router.back()
}

onMounted(() => {
  movieStore.setSelectedMovie(route.params.imdbID as string)
})
</script>