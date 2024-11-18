<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const title = ref(route.meta.title || '')

// update title when route change
watch(
  () => route.meta.title,
  (newTitle) => {
    title.value = newTitle || ''
  },
)
</script>
