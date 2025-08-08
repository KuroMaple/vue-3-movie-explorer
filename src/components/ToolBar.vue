<template>
  <v-row align="center">
    <v-toolbar color="secondary" :collapse="collapse" :extended="!collapse">
      <template v-slot:prepend>
        <v-btn
          class="ml-3"
          icon="mdi-magnify"
          v-tooltip:bottom="'Search for movies'"
          @click="collapse = !collapse"
        ></v-btn>
      </template>
      <v-toolbar-items v-show="!collapse" style="flex: 1;">
        <v-text-field 
          label="Enter a search term..." 
          variant="solo-filled" 
          density="compact"
          style="max-width: 400px; margin: 0 auto; padding-top: 1.4em;">
        </v-text-field>
      </v-toolbar-items>
    </v-toolbar>
    <v-card-title v-show="collapse">
      <h1>Movie Explorer 3</h1>
    </v-card-title>
  </v-row>
</template>

<script setup lang="ts">
import { shallowRef } from 'vue'

  const collapse = shallowRef(false)

</script>

<style scoped>

</style>