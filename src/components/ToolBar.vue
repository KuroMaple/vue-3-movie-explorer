<template>
  <v-row align="center">
    <v-toolbar color="secondary" :collapse="collapse" :extended="!collapse">
      <template v-slot:prepend>
        <v-btn
          class="ml-3"
          :class="{ 'pulse-bg': showBlink }"
          icon="mdi-magnify"
          v-tooltip:bottom="'Search for movies'"
          @click="handleIconClick"
        ></v-btn>
      </template>
      <v-toolbar-items v-show="!collapse" style="flex: 1;justify-content: center; align-items: center; margin-top: 1%;">
        <v-form
          @submit.prevent="onSearch"
          style="width: 100%; max-width: 420px; display: flex; flex-direction: row; gap: 8px;">
          <v-text-field 
            label="Enter a search term..." 
            variant="solo-filled" 
            density="compact"
            v-model="searchTerm"
            :rules="[rules.required]"
          ></v-text-field>
          <v-btn type="submit" variant="outlined" style="height: 40px; min-width: 80px;" >Submit</v-btn>
        </v-form>
      </v-toolbar-items>
      
    </v-toolbar>
    <v-card-title v-show="collapse">
      <h1>Movie Explorer 3</h1>
    </v-card-title>
  </v-row>
</template>

<script setup lang="ts">
import { useMovieStore } from '@/stores/movieStore'
import { storeToRefs } from 'pinia'
import { ref, shallowRef } from 'vue'
import { useRouter } from 'vue-router'

  const collapse = shallowRef(true)
  const rules = {
    required:( value: string) => !!value || "Search term is required..." 
  }
  const showBlink = ref(true)
  const router = useRouter()
  const movieStore = useMovieStore()
  const { searchTerm } = storeToRefs(movieStore)
  // Functions
  const onSearch = () => {
    if (!searchTerm.value){
      console.log("ERROR: need a search value")
      return
    }
    console.log("Searching for: ", searchTerm.value)
    router.push({
      name: 'SearchResults', 
      params: {
        query: searchTerm.value
      }
    })
  }

  const handleIconClick = () => {
    collapse.value = !collapse.value
    showBlink.value = false
  }
</script>

<style scoped>
.pulse-bg {
  animation: pulse-bg-animation 1.2s ease-in-out infinite;
}

@keyframes pulse-bg-animation {
  0% {
    box-shadow: 0 0 0 0 rgba(130, 251, 255, 0.7);
  }
  50% {
    box-shadow: 0 0 0 8px rgba(130, 251, 255, 0.2);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(130, 251, 255, 0.7);
  }
}
</style>