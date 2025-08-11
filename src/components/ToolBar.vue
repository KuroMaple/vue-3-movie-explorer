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
import { ref, shallowRef } from 'vue'

  const collapse = shallowRef(false)
  const searchTerm = ref("")
  const rules = {
    required:( value: string) => !!value || "Search term is required..." 
  }

  const onSearch = () => {
    if (!searchTerm.value){
      console.log("ERROR: need a search value")
      return
    }
    console.log("Searching for: ", searchTerm.value)
  }
</script>

<style scoped>

</style>