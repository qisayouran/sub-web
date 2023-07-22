<script setup>
import { onBeforeMount } from "vue"

onBeforeMount(() => {
  document
    .getElementsByTagName("html")[0]
    .setAttribute("class", localStorage.getItem("theme"))
})
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style scoped></style>
