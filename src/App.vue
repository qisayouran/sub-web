<script setup>
import { onBeforeMount } from "vue"
import { useThemeStore } from "./stores/counter"
const theme = useThemeStore()

onBeforeMount(() => {
  document
    .getElementsByTagName("html")[0]
    .setAttribute("class", theme.selectTheme)
})
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style scoped></style>
