<script setup lang="ts">
import { ref } from 'vue'
import type { Cell } from '@/models/Cell'

const props = defineProps<{
  width: number
  height: number
  initialFirePositions: { x: number; y: number }[]
  propagationProbability: number
}>()

// grid initialisation
const grid = ref<Cell[][]>([])

function initializeGrid() {
  grid.value = Array.from({ length: props.height }, () =>
    Array.from({ length: props.width }, () => ({ state: 'tree' })),
  )

  // fire update of inital case
  props.initialFirePositions.forEach(({ x, y }) => {
    if (grid.value[y] && grid.value[y][x]) {
      grid.value[y][x].state = 'fire'
    }
  })
}

// update simulation function
function updateSimulation() {
  const newGrid = grid.value.map((row) => row.map((cell) => ({ ...cell })))

  for (let y = 0; y < props.height; y++) {
    for (let x = 0; x < props.width; x++) {
      const cell = grid.value[y][x]
      if (cell.state === 'fire') {
        newGrid[y][x].state = 'ash' // fire become ash

        // fire propagation
        const directions = [
          { dx: -1, dy: 0 },
          { dx: 1, dy: 0 },
          { dx: 0, dy: -1 },
          { dx: 0, dy: 1 },
        ]

        directions.forEach(({ dx, dy }) => {
          const newX = x + dx
          const newY = y + dy
          if (
            newX >= 0 &&
            newX < props.width &&
            newY >= 0 &&
            newY < props.height &&
            newGrid[newY][newX].state === 'tree' &&
            Math.random() < props.propagationProbability
          ) {
            newGrid[newY][newX].state = 'fire'
          }
        })
      }
    }
  }

  grid.value = newGrid
}

// function for start the simulation
function startSimulation() {
  initializeGrid()
  const interval = setInterval(() => {
    updateSimulation()
    if (!grid.value.flat().some((cell) => cell.state === 'fire')) {
      clearInterval(interval) // stop simulation when there is no fire anymore
    }
  }, 1000) // update every second
}

startSimulation()
</script>

<template>
  <div class="forest-grid">
    <div v-for="(row, y) in grid" :key="y" class="row">
      <div v-for="(cell, x) in row" :key="x" :class="['cell', cell.state]"></div>
    </div>
  </div>
</template>

<style src="@/assets/forestFire/forest-grid.css" scoped></style>
