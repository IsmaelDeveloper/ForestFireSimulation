<script setup lang="ts">
import ForestFireSimulation from '@/components/ForestFireSimulation.vue'
import config from '@/assets/forestFire/forestFire.json'

// use data import from forestFire.json
const gridWidth = config.gridWidth
const gridHeight = config.gridHeight
const initialFirePositions = config.initialFirePositions
const propagationProbability = config.propagationProbability
</script>

<template>
  <div class="forest-fire">
    <ForestFireSimulation
      :width="gridWidth"
      :height="gridHeight"
      :initialFirePositions="initialFirePositions"
      :propagationProbability="propagationProbability"
    />
  </div>
</template>
