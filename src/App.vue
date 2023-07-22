<script setup>
import { onBeforeMount } from "vue"

const anhei = () => {
  const getLocalTheme = localStorage.getItem("theme")
  const lightMode = window.matchMedia("(prefers-color-scheme: light)")
  const darkMode = window.matchMedia("(prefers-color-scheme: dark)")
  console.log(lightMode, darkMode)
  if (getLocalTheme) {
    document
      .getElementsByTagName("html")[0]
      .setAttribute("class", getLocalTheme)
  } else if (
    getLocalTheme == null ||
    getLocalTheme == "undefined" ||
    getLocalTheme == ""
  ) {
    //根据当前时间来判断，用来对付QQ等不支持媒体变量查询的浏览器
    if (new Date().getHours() >= 19 || new Date().getHours() < 7) {
      document.getElementsByTagName("html")[0].setAttribute("class", "dark")
    } else {
      document.getElementsByTagName("html")[0].setAttribute("class", "defult")
    }
    //根据窗口主题来判断当前主题！
    if (lightMode && lightMode.matches) {
      document.getElementsByTagName("html")[0].setAttribute("class", "defult")
    }
    if (darkMode && darkMode.matches) {
      document.getElementsByTagName("html")[0].setAttribute("class", "dark")
    }
  }
}

onBeforeMount(() => {
  anhei()
  let lightMedia = window.matchMedia("(prefers-color-scheme: light)")
  let darkMedia = window.matchMedia("(prefers-color-scheme: dark)")
  let callback = (e) => {
    if (e.matches) {
      anhei()
      console.log("object")
    }
  }
  lightMedia.addEventListener("change", callback)
  darkMedia.addEventListener("change", callback)
})
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style scoped></style>
